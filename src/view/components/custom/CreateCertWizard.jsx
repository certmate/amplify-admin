import { Button, Modal, Card, Form, Select, Carousel, Divider, Space, List, Spin } from "antd";
import { AddCircle } from "iconsax-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { object } from "yup";
import { routes } from "../../../settings";
import { find, first, get, isEmpty, omit } from "lodash";
import { getData, readData, upsertData } from "../../../common";
import { useSelector } from "react-redux";
import { cleanNull, generateRandomString, role } from "../../../helpers";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { v4 } from "uuid";
import { createCert, updateCert } from "../../../graphql/mutations";
import SweetAlert from 'sweetalert2';
import {checklists} from '../../../data/checklists';

export default function CreateCertWizard({ callback }) {
    const user = useSelector(state => state.user);
    const [showModal, setShowModal] = useState();
    const [checkingRego, setCheckingRego] = useState(false);
    const form = useMemo(() => routes['/certs'].form, []);
    const fields = useMemo(() => routes['/certs'].form.create.fields, [form]);
    const auditCarousel = useRef(null);

    const getExistingCert = useCallback(async id => {
        try {
            let cert = get(await getData({ model: 'Vehicle', fields: ['id', {field: 'certs.id,_version', filter: `{ status: { eq: "A" } }`}], id }), 'certs.items', []);
            setCheckingRego(false);
            return isEmpty(cert) ? false : cert[0];
        }
        catch (e) {
            console.log(e);
            setCheckingRego(false);
            return false;
        }
    }, []);

    const getInspectorID = useCallback(async number => {
        try {
            return get(await readData({ model: 'User', fields: ['id'], user, filter: { inspectorNumber: { eq: number } } }), '0.id', null);
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }, []);

    const validationSchema = useMemo(() => {
        let v = {};
        fields.map(f => {
            const field = first(f.split('.'));
            const { validation } = form.schema[field];
            if (validation) {
                v[field] = validation;
            }
        });
        return object().shape({ ...v });
    }, [form]);

    const initialValues = useMemo(() => ({ auditSections: [], vehiclePics: [], number: generateRandomString({ len: 10 }), supercede: false, ...(role(user) === 'Inspector' ? {inspectorID: user.appsync.id, status: 'A'} : role(user) === 'Driver' ? {driverID: user.appsync.id} : {}) }), [])

    const [selectOptions, setSelectOptions] = useState({});

    useEffect(() => {
        (async () => {
            setSelectOptions({
                vehicles: await readData({ user, model: 'Vehicle', fields: [`value:id`, `label:rego`, 'category'] }),
                inspectors: await readData({ user, model: 'User', fields: [`value:id`, `label:name`], filter: { roles: { contains: 'Inspector' } } }),
                drivers: await readData({ user, model: 'User', fields: [`value:id`, `label:name`], filter: { roles: { contains: 'Driver' } } }),
                clients: await readData({ user, model: 'Client', fields: [`value:id`, `label:name`] }),
                companies: await readData({ user, model: 'Company', fields: [`value:id`, `label:name`] }),
            });
        })();
    }, [form]);

    /**
     * Show Create Fields
     * 1.   If user is driver, ask to enter inspector
     * 2.   If user is inspector, ask to enter driver
     * 3.   Show checklist based on vehicle category - Clean + Fail
     */
    return <>
        <Button type="primary" onClick={() => setShowModal(true)}>
            <AddCircle set="curved" size={18} style={{ marginRight: 12 }} />
            <span>Create Cert</span>
        </Button>
        <Modal
            title={<h4 className='hp-mb-0'>Create Cert</h4>}
            open={showModal}
            onCancel={() => setShowModal(false)}
            footer={null}
        >
            <Spin spinning={checkingRego}>
                <Card>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                        onSubmit={async (values, { resetForm }) => {
                            values = cleanNull(values);
                            console.log({ values });
                            // Check inspector number
                            if(values.inspectorNumber){
                                let inspectorID = await getInspectorID(values.inspectorNumber);
                                // If inspectorID is empty, inspector number is wrong
                                !inspectorID && SweetAlert.fire({
                                    title: 'Inspector not found',
                                    text: 'The inspector number you entered is incorrect',
                                    showCancelButton: false,
                                    confirmButtonText: 'Close',
                                }).then((result) => {
                                    /* Read more about isConfirmed, isDenied below */
                                    return false;
                                })
                            }
                            try {
                                if (values.supercede) {
                                    // Supercede old cert
                                    await upsertData({ query: updateCert, payload: { id: values.supercede.id, _version: values.supercede._version, status: "E" }, schema: form.schema, user });
                                }
                                // 
                                // 
                                values.type.includes('elf') && (values.status = 'A');
                                await upsertData({ query: createCert, payload: omit({ ...values, number: `CM${values.type.includes('elf') ? 'SD' : 'VH'}${values.number}`, auditSections: JSON.stringify(values.auditSections) }, ['supercede']), schema: form.schema, user });
                                resetForm();
                                callback?.();
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
                            setFieldValue,
                        }) => (<>
                            <Form layout="vertical" onSubmitCapture={handleSubmit}>
                                {/* Common Fields */}
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.type.label}</span>
                                    <Select onChange={handleChange('type')} options={form.schema.type.formComponent.select.options.map(o => ({ label: o, value: o }))} />
                                    <ErrorMessage name='type' render={m => <span className="hp-text-color-danger-1">{m}</span>} />
                                    <span className="hp-text-color-danger-1">{errors?.type}</span>
                                </div>
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.companyID.label}</span>
                                    <Select onChange={handleChange('companyID')} options={selectOptions?.companies || [{ label: '', value: '' }]} />
                                    <ErrorMessage name='companyID' render={m => <span className="hp-text-color-danger-1">{m}</span>} />
                                    <span className="hp-text-color-danger-1">{errors?.companyID}</span>
                                </div>
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.clientID.label}</span>
                                    <Select onChange={handleChange('clientID')} options={selectOptions?.clients || [{ label: '', value: '' }]} />
                                    <span className="hp-text-color-danger-1">{errors?.clientID}</span>
                                </div>
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.vehicleID.label}</span>
                                    <Select onChange={async f => {
                                        // Check if cert exists
                                        setCheckingRego(true);
                                        const l = await getExistingCert(f);
                                        if (Boolean(l)) {
                                            SweetAlert.fire({
                                                title: 'Cert already exists',
                                                text: 'A valid cert already exists for this vehicle. Creating another cert will override the previous cert. Are you sure you want to continue?',
                                                showDenyButton: true,
                                                showCancelButton: false,
                                                confirmButtonText: 'Yes',
                                                denyButtonText: `No`,
                                            }).then((result) => {
                                                /* Read more about isConfirmed, isDenied below */
                                                if (result.isConfirmed) {
                                                    setFieldValue('vehicleID', f);
                                                    setFieldValue('supercede', l);
                                                }
                                                else if (result.isDenied) {
                                                    setFieldValue('vehicleID', null);
                                                }
                                            })
                                        }
                                        else {
                                            setFieldValue('vehicleID', f);
                                            console.log(checklists[f]);
                                        }
                                        // Pop
                                    }} options={selectOptions?.vehicles || [{ label: '', value: '' }]} />
                                    <span className="hp-text-color-danger-1">{errors?.vehicleID}</span>
                                </div>
                                {!values.type?.includes('elf') && checklists[find(selectOptions.vehicles, { value: values.vehicleID })?.category] && <>
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">Audit</span>
                                    <List dataSource={values.auditSections || []} renderItem={({ title, result }) => <List.Item>
                                        <List.Item.Meta
                                            title={title}
                                        />
                                        <div className={`hp-text-color-${result === 'Clean' ? 'success' : 'danger'}-1`}>{result}</div>
                                    </List.Item>} />
                                    <ErrorMessage name='auditSections' render={m => <span className="hp-text-color-danger-1">{m}</span>} />
                                    {checklists[find(selectOptions.vehicles, { value: values.vehicleID })?.category]?.length > values.auditSections?.length && <div className="hp-mb-16">
                                        <Carousel ref={auditCarousel}>
                                            {checklists[find(selectOptions.vehicles, { value: values.vehicleID })?.category]?.map(({ title, items }, k) => (
                                                <Card key={k} title={title}>
                                                    <ul>
                                                        {items.map((i, j) => <li key={j}>{i}</li>)}
                                                    </ul>
                                                    <Divider />
                                                    <Space>
                                                        <Button danger onClick={() => {
                                                            setFieldValue('auditSections', [...values.auditSections, { title, items, result: 'Fail' }]);
                                                            auditCarousel.current.next();
                                                        }}>Fail</Button>
                                                        <Button type="primary" onClick={() => {
                                                            setFieldValue('auditSections', [...values.auditSections, { title, items, result: 'Clean' }]);
                                                            auditCarousel.current.next();
                                                        }}>Clean</Button>
                                                    </Space>
                                                </Card>
                                            ))}
                                        </Carousel>
                                    </div>}
                                </>}
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.odometer.label}</span>
                                    <Field name='odometer' className='ant-input' disabled={isSubmitting} />
                                    <span className="hp-text-color-danger-1">{errors?.odometer}</span>
                                </div>
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.operatingArea.label}</span>
                                    <Field name='operatingArea' className='ant-input' disabled={isSubmitting} />
                                    <span className="hp-text-color-danger-1">{errors?.operatingArea}</span>
                                </div>
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.vehiclePics.label}</span>
                                    <StorageManager accessLevel="public" acceptedFileTypes={['image/*', 'application/pdf']} maxFileCount={10} isResumable processFile={({ file }) => { const key = `${user.cognito.username}/${v4()}.${file.name.split('.').pop()}`; setFieldValue('vehiclePics', [...values.vehiclePics, key]); return { file, key } }} />
                                    <span className="hp-text-color-danger-1">{errors?.vehiclePics}</span>
                                </div>
                                {/* If driver, show inspector; vice versa */}
                                {!values.type?.includes('elf') && role(user) === 'Driver' ? (
                                    <div className="hp-mb-16">
                                        <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">Inspector Number</span>
                                        <Field name='inspectorNumber' className='ant-input' disabled={isSubmitting} />
                                        <span className="hp-text-color-danger-1">{errors?.inspectorNumber}</span>
                                    </div>
                                ) : null}
                                {!values.type?.includes('elf') && role(user) === 'Owner' ? (
                                    <div className="hp-mb-16">
                                        <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.inspectorID.label}</span>
                                        <Select onChange={handleChange('inspectorID')} options={selectOptions?.inspectors || [{ label: '', value: '' }]} />
                                    </div>
                                ) : null}
                                {role(user) === 'Inspector' || role(user) === 'Owner' ? (
                                    <div className="hp-mb-16">
                                        <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.driverID.label}</span>
                                        <Select onChange={handleChange('driverID')} options={selectOptions?.drivers || [{ label: '', value: '' }]} />
                                    </div>
                                ) : null}
                                <div className="hp-mb-16">
                                    <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{form.schema.comments.label}</span>
                                    <Field as='textarea' name='comments' className='ant-input' disabled={isSubmitting} />
                                    <span className="hp-text-color-danger-1">{errors?.comments}</span>
                                </div>

                                <Button icon={null} type="primary" htmlType="submit" loading={isSubmitting}>
                                    Submit
                                </Button>
                                {/* <pre>{JSON.stringify({ values, errors }, false, 4)}</pre> */}
                            </Form>
                        </>)}
                    </Formik>
                </Card>
            </Spin>
        </Modal>
    </>
}