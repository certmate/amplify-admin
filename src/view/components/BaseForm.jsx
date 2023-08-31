import { Button, Input, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Formik } from "formik";
import { object } from "yup";
import { Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanNull } from "../../helpers";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { entries, pick } from "lodash";

export default function BaseForm({ schema, fields, onSubmit }) {
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

                    default:
                        console.log(`Unknown validation type: ${validation.type}`);
                        break;
                }
            }
        })

        return [i, object().shape({ ...v })];
    }, [schema, fields]);

    useEffect(() => {
        /**
         * Calculate 
         */
        let o = {}, e = entries(pick(schema, fields));
        for (let i = 0; i < e.length; i++) {
            const [field, { selectOptions }] = e[i];
            
        }
        // .map( ([field, { selectOptions }]) => {
        //     console.log({field, selectOptions});
        //     selectOptions && (o[field] = selectOptions);
        // } );
        // console.log(o, schema);
        // setOptions(o);
    }, [fields])

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async values => {
            await onSubmit(cleanNull(values));
            form.resetFields();
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
                {fields.map((f, k) => {
                    const { label, formComponent, selectOptions } = schema[f];
                    return formComponent ? (
                        <Form.Item name={f} label={label} key={`form-${k}`} validateStatus={errors?.[f] ? 'error' : 'success'} help={errors?.[f]}>{
                            formComponent === 'input' ? <Input onChange={handleChange(f)} disabled={isSubmitting} />
                                : formComponent === 'upload' ? <StorageManager accessLevel="public" acceptedFileTypes={['image/*']} maxFileCount={1} isResumable processFile={({ file }) => { const key = `${user.cognito.username}/${v4()}.${file.name.split('.').pop()}`; setFieldValue(f, key); return { file, key } }} />
                                    : formComponent === 'select' ? <Select options={/*options?.[f] || */[{label: f, value: f}]} />
                                        : null
                        }</Form.Item>
                    ) : null
                })}
                <pre>{JSON.stringify({ options }, false, 4)}</pre>
                <Form.Item>
                    <Button icon={null} type="primary" htmlType="submit" loading={isSubmitting}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>)}
    </Formik>
}
