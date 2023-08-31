import { Row, Col, Button, Space, Modal, Card } from "antd";
import { AddCircle } from "iconsax-react";
import { isEmpty, startCase } from "lodash";
import Filters from "./Filters";
import { useState } from "react";
import BaseForm from "./BaseForm";
import * as mutations from "../../graphql/mutations";
import SweetAlert from 'sweetalert2';
import { API, graphqlOperation } from 'aws-amplify';
import { useSelector } from "react-redux";

export default function BaseHeader({ title, model, form, filters, createCallback }) {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.user);

    return <>
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-16">
            <Col span={8}>
                <h1 className="hp-mb-0">{title}</h1>
            </Col>
            <Col span={16} className='hp-text-right'>
                <Space>
                    {!isEmpty(form?.create) && <>
                        <Button type="primary" onClick={() => setShowModal(true)}>
                            <AddCircle set="curved" size={18} style={{ marginRight: 12 }} />
                            <span>Create {title}</span>
                        </Button>
                    </>}
                </Space>
            </Col>
        </Row>
        <Filters filters={filters} />
        {/* Modals */}
        <Modal
            title={<h4 className='hp-mb-0'>Create {startCase(title)}</h4>}
            open={showModal}
            onCancel={() => setShowModal(false)}
            footer={null}
        >
            <Card>
                <BaseForm schema={form?.schema} fields={form?.create} onSubmit={async input => {
                    try {
                        await API.graphql(graphqlOperation(mutations[`create${model}`], { input: { ...input, base: user.appsync.base } }));
                        setShowModal(false);
                        createCallback();
                        await SweetAlert.fire({ title: 'Success', text: `${model} Created!`, icon: 'success' });
                    }
                    catch (e) {
                        console.log(e);
                    }
                }} />
            </Card>
        </Modal>
    </>
}