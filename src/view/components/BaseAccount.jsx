import { useSelector } from "react-redux";
import BaseForm from "./BaseForm";
import { useEffect, useState } from "react";
import { getData } from "../../common";
import SweetAlert from 'sweetalert2';
import { Col, Row } from "antd";

export default function BaseAccount({ form }) {
    const user = useSelector(state => state.user);
    const [values, setValues] = useState(null);

    useEffect(() => {
        user?.appsync && (async () => {
            setValues(await getData({ model: 'User', fields: form.create.fields, id: user.appsync.id }))
        })();
    }, [user]);

    return <>
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-16">
            <Col span={8}>
                <h1 className="hp-mb-0">Account</h1>
            </Col>
        </Row>
        <BaseForm model='User' validateOnChange={true} schema={form.schema} fields={form.create.fields} values={values} form={form} onSubmit={async () => {
            await SweetAlert.fire({ title: 'Done', text: `Account Updated`, icon: 'success' });
        }} />
    </>
}