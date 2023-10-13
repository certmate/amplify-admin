import { Button, Card, Input, Modal, Space, Form } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Share } from "iconsax-react";
import { useState } from "react";
import { object, string } from "yup";
import { updateCert } from "../../../graphql/mutations";
import { getData } from "../../../common";
import { API, graphqlOperation } from "aws-amplify";
import SweetAlert from 'sweetalert2';
import { uniq } from "lodash";

export default function ShareCert({ data, model, callback }) {
    const [showShareModal, setShowShareModal] = useState(false);
    const [initialValues, setInitialValues] = useState({ email: '' });

    return <>
        <Space onClick={() => setShowShareModal(true)}><Share size={24} /> Share</Space>

        <Modal
            onClick={() => e.stopPropagation()}
            title={<h4 className='hp-mb-0'>Share Certificate</h4>}
            open={showShareModal}
            onCancel={() => setShowShareModal(false)}
            footer={null}
        >
            <Card>
                <Formik
                    initialValues={initialValues}
                    validationSchema={object().shape({ email: string().email().required() })}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    onSubmit={async (values, { resetForm }) => {
                        console.log({ values, data });
                        try {
                            /**
                             * Update read array of cert
                             * 1.   Get existing read array
                             * 2.   append
                             */
                            const { id, _version } = data;
                            await API.graphql(graphqlOperation(updateCert, { input: {
                                id,
                                _version,
                                read: uniq([...((await getData({ model, fields: ['read'], id })).read || []), values.email])
                            } }));
                
                            await callback();
                            await SweetAlert.fire({ title: 'Done', icon: 'success' });
                            resetForm();
                            setShowShareModal(false);
                        } catch (error) {
                            console.log({error});
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
                        <Form layout="vertical" onSubmitCapture={handleSubmit}>
                            <Form.Item label="Email of user" className="hp-mb-16">
                                <Input onChange={handleChange('email')} onBlur={handleBlur('email')} />
                                <ErrorMessage name={'email'} render={m => <span className="hp-text-color-danger-1">{m}</span>} />
                            </Form.Item>
                            <Form.Item className="hp-mt-16 hp-mb-8">
                                <Button block loading={isSubmitting} type="primary" htmlType="submit" onClick={handleSubmit}>
                                    Share
                                </Button>
                            </Form.Item>
                            <pre>{JSON.stringify({ values, errors, initialValues, }, false, 4)}</pre>
                        </Form>
                    </>)}
                </Formik>
            </Card>
        </Modal >
    </>
}