import { Button, Input, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Formik } from "formik";
import { object } from "yup";
import { Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanNull, getChildModel, getParentModel, isChildNode } from "../../helpers";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { concat, entries, isArray, merge, omit, pick } from "lodash";
import { readData } from "../../common";
import ParentPicker from "./ParentPicker";
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";

export default function BaseForm({ model, schema, fields, readFields, onSubmit, clearInputs }) {
    const user = useSelector(state => state.user);
    const [form] = Form.useForm();
    const [options, setOptions] = useState({});

    const [initialValues, validationSchema] = useMemo(() => {
        let i = {}, v = {};
        fields.map(f => {
            const { validation } = schema[f];
            if (validation) {
                v[f] = validation;
                switch (validation.type) {
                    case "string":
                        i[f] = '';
                        break;

                    case "array":
                        i[f] = [
                            validation.innerType?.type === 'string' ? ''
                                : ''
                        ];
                        break;

                    default:
                        console.log(`Unknown validation type: ${validation.type}`);
                        break;
                }
            }
        })

        return [i, object().shape({ ...v })];
    }, [schema, fields]);

    useEffect(() => {
        (async () => {
            /**
         * Calculate 
         */
            let o = {}, e = entries(pick(schema, fields));
            for (let i = 0; i < e.length; i++) {
                const [field, { selectOptions }] = e[i];

                if (!selectOptions) {
                    continue;
                }
                else {
                    console.log(selectOptions);
                    if (isArray(selectOptions)) {
                        // Simple array of options
                        o[field] = selectOptions.map(s => ({ label: s, value: s }));
                    }
                    else if (selectOptions[0] === '@') {
                        // Fetch data from models
                        // @model.valueField:labelField
                        const [model, valueLabel] = selectOptions.slice(1).split('.');
                        const [value, label] = valueLabel.split(':');
                        o[field] = await readData({ user, model, fields: [`value:${value}`, `label:${label}`] });
                    }
                }

            }
            setOptions(o);
        })();

    }, [fields]);

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async values => {
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
                        [getChildModel(model)]: concat(
                            // Set id if id field
                            [cleanNull({ ...omit(values, ['parent']), id: fields.includes('id') ? v4() : null })],
                            (await readData({ user, filter: null, model, fields: readFields })).map(d => pick(d, fields))
                        )
                    };
                }
                else {
                    query = mutations[`create${model}`];
                    payload = { ...values, base: user.appsync.base };
                }
                await API.graphql(graphqlOperation(query, { input: payload }));
                form.resetFields();
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
            setFieldValue
        }) => (<>
            <Form form={form} layout="vertical" onSubmitCapture={handleSubmit}>
                {/* 
                    If child node, parent should be picked
                */}
                {isChildNode(model) && <ParentPicker model={model} onPick={(parent) => ['id', '_version'].forEach(p => setFieldValue(`parent.${p}`, parent[p]))} />}
                {isChildNode(model) && (!values.parent?.id || !values.parent?._version) ? <></> : (
                    fields.map((f, k) => {
                        const { label, formComponent, validation } = schema[f];
                        return formComponent ? (
                            <Form.Item name={f} label={label} key={`form-${k}`} validateStatus={errors?.[f] ? 'error' : 'success'} help={errors?.[f]}>{
                                formComponent === 'input' ? <Input onChange={handleChange(f)} disabled={isSubmitting} />
                                    : formComponent === 'upload' ? <StorageManager accessLevel="public" acceptedFileTypes={['image/*', 'application/pdf']} maxFileCount={1} isResumable processFile={({ file }) => { const key = `${user.cognito.username}/${v4()}.${file.name.split('.').pop()}`; setFieldValue(f, key); return { file, key } }} />
                                        : formComponent === 'select' ? (
                                            validation?.type === 'array' ? <Select mode='multiple' onChange={c => setFieldValue(f, c)} options={options?.[f] || [{ label: f, value: f }]} />
                                                : <Select onChange={handleChange(f)} options={options?.[f] || [{ label: f, value: f }]} />
                                        )
                                            : null
                            }</Form.Item>
                        ) : null
                    })
                )}
                {/* <pre>{JSON.stringify({ values, clearInputs }, false, 4)}</pre> */}
                <Form.Item>
                    <Button icon={null} type="primary" htmlType="submit" loading={isSubmitting}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>)}
    </Formik>
}
