import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal, Upload } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { entries, isEmpty, startCase, uniqueId } from "lodash";
import { useEffect, useMemo, useState } from "react";
import graphqlSchema from "../../graphql/schema";
import { Formik } from "formik";
import { object } from "yup";
import { Checkbox, Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanNull } from "../../helpers";

export default function BaseForm({ schema, fields, onSubmit }) {

    const [form] = Form.useForm();

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
                    const { label, component } = schema[f];
                    return component ? (
                        <Form.Item name={f} label={label} key={`form-${k}`} validateStatus={errors?.[f] ? 'error' : 'success'} help={errors?.[f]}>{
                            component === 'input' ? <Input onChange={handleChange(f)} disabled={isSubmitting} /> 
                            : component === 'upload' ? <StorageManager accessLevel="public" acceptedFileTypes={['image/*']} maxFileCount={1} isResumable processFile={({ file, key }) => ({ file, key: `logo.${file.name.split('.').pop()}` })} /> : null
                        }</Form.Item>
                    ) : null
                })}
                <Form.Item>
                    <Button icon={null} type="primary" htmlType="submit" loading={isSubmitting}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>)}
    </Formik>
}
