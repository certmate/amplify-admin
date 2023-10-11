import { Button, Input, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { object } from "yup";
import { Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanEmptyConnections, cleanNull, getChildModel, getParentModel, isChildNode } from "../../helpers";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { concat, entries, isArray, isEqual, omit, pick, find, uniqBy, get } from "lodash";
import { getData, readData } from "../../common";
import ParentPicker from "./ParentPicker";
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";
import { deriveComponent } from "./BaseTable";

export default function BaseForm({ model, schema, fields, readFields, onSubmit, values }) {
    const user = useSelector(state => state.user);
    const [form] = Form.useForm();
    const [options, setOptions] = useState({});
    const [formValues, setFormValues] = useState(values);
    const formIs = useMemo(() => Boolean(formValues?._version) ? 'update' : 'create', [formValues]);

    const [initialValues, validationSchema] = useMemo(() => {
        let i = {}, v = {};
        // Fields from settings
        fields.map(f => {
            const { validation } = schema[f];
            if (validation) {
                v[f] = validation;
                switch (validation.type) {
                    case "string":
                        i[f] = formValues?.[f] || '';
                        break;

                    case "array":
                        i[f] = formValues?.[f] || [
                            validation.innerType?.type === 'object' ? {}
                                : null
                        ].filter(Boolean);
                        break;

                    default:
                        console.log(`Unknown validation type: ${validation.type}`);
                        break;
                }
            }
        })

        // Custom fields for updating child node - Is there a better place to put this?
        isChildNode(model) && ['parent', 'id'].forEach(v => formValues?.[v] && (i[v] = formValues[v]))
        return [i, object().shape({ ...v })];
    }, [schema, fields, formValues]);

    useEffect(() => {
        (async () => {
            /**
         * Calculate 
         */
            let o = {}, e = entries(pick(schema, fields));
            for (let i = 0; i < e.length; i++) {
                const [field, { formComponent: { select } }] = e[i];
                // Check if form is a select component and has select options specified

                if (!select?.options) {
                    continue;
                }
                else {
                    if (isArray(select.options)) {
                        // Simple array of options
                        o[field] = select.options.map(s => ({ label: s, value: s }));
                    }
                    else if (select.options[0] === '@') {
                        // Fetch data from models
                        // @model.valueField:labelField
                        const [model, valueLabel] = select.options.slice(1).split('.');
                        const [value, label] = valueLabel.split(':');
                        o[field] = await readData({ user, model, fields: [`value:${value}`, `label:${label}`], filter: get(select, 'filter', null) });
                    }
                }

            }
            setOptions(o);
        })();

    }, [fields]);

    useEffect(() => {

        values?.id && (async () => {
            if (isChildNode(model)) {
                // 
                // 
                // Populate parent & child values
                const parentModel = getParentModel(model);
                const childModel = getChildModel(model);
                const { id, _version, name, logo, ...parentData } = await getData({ model, fields, id: values[parentModel].id })

                let formValues = {
                    parent: { id, _version, name, logo },
                    // Get correct child model from parent
                    // TODO Make lookup key dynamic. For now, it's ID
                    ...find(parentData[childModel], { id: values.id })
                };

                setFormValues(formValues);
            }
            else {
                setFormValues(await getData({ model, fields, id: values.id }));
            }
        })();

        return () => setFormValues(null);
    }, [values]);

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
            values = cleanNull(values);
            try {
                let query, payload;
                if (isChildNode(model)) {
                    query = mutations[`update${getParentModel(model)}`];
                    /**
                     * Structure payload
                     */
                    payload = {
                        // id, _version of model
                        id: values.parent.id,
                        _version: values.parent._version,
                        // New + Existing
                        [getChildModel(model)]: uniqBy(concat(
                            // Set id if id field
                            [cleanNull({ ...omit(values, ['parent']), id: fields.includes('id') ? values.id || v4() : null })],
                            (await readData({ user, filter: null, model, fields: readFields })).filter(r => r[getParentModel(model)].id === values.parent.id).map(d => pick(d, fields))
                        ), 'id')
                    };
                }
                else {
                    query = mutations[`${formIs}${model}`];
                    payload = { ...values, base: user.appsync.base, ...(isEqual(formIs, 'update') ? { id: formValues.id, _version: formValues._version } : {}) };
                }

                // console.log({ query, payload, formValues }); return;
                await API.graphql(graphqlOperation(query, { input: cleanEmptyConnections(payload) }));
                resetForm();
                onSubmit();
            }
            catch (e) {
                console.log(e);
            }
        }}
    >
        {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            setFieldValue
        }) => (<>
            <Form form={form} layout="vertical" onSubmitCapture={handleSubmit}>
                {/* 
                    If child node, parent should be picked
                */}
                {isChildNode(model) && <ParentPicker model={model} parent={values.parent} onPick={(parent) => ['id', '_version', 'name', 'logo'].forEach(p => setFieldValue(`parent.${p}`, parent[p]))} />}
                {isChildNode(model) && (!values.parent?.id || !values.parent?._version) ? <></> : <>
                    {fields.map((f, k) => {
                        const { label, formComponent: { component }, validation } = schema[f];

                        return component ? (
                            <Field name={f} key={`form-${k}`}>
                                {({ field }) => (
                                    <div className="hp-mb-16">
                                        <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{label}</span>
                                        {
                                            component === 'input' ? <Input {...field} onChange={handleChange(f)} disabled={isSubmitting} />
                                                : component === 'upload' ? <>
                                                    <StorageManager {...field} accessLevel="public" acceptedFileTypes={['image/*', 'application/pdf']} maxFileCount={1} isResumable processFile={({ file }) => { const key = `${user.cognito.username}/${v4()}.${file.name.split('.').pop()}`; setFieldValue(f, key); return { file, key } }} />
                                                    {values?.[f] && deriveComponent('image', values?.[f])}
                                                </>
                                                    : component === 'select' ? (
                                                        validation?.type === 'array' ? <Select {...field} mode='multiple' onChange={c => setFieldValue(f, c)} options={options?.[f] || [{ label: f, value: f }]} />
                                                            : <Select {...field} onChange={handleChange(f)} options={options?.[f] || [{ label: f, value: f }]} />
                                                    )
                                                        : null
                                        }
                                        <ErrorMessage name={f} render={m => <span className="hp-text-color-danger-1">{m}</span>} />
                                    </div>
                                )}
                            </Field>
                        ) : null
                    })}
                    <Form.Item>
                        <Button icon={null} type="primary" htmlType="submit" loading={isSubmitting}>
                            Submit
                        </Button>
                    </Form.Item>
                </>}
                <pre>{JSON.stringify({ values, errors, initialValues, }, false, 4)}</pre>

            </Form>
        </>)}
    </Formik>
}
