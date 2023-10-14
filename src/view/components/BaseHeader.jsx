import { Row, Col, Button, Space, Modal, Card } from "antd";
import { AddCircle } from "iconsax-react";
import { get, isEmpty, startCase } from "lodash";
import Filters from "./Filters";
import { useState } from "react";
import BaseForm from "./BaseForm";
import SweetAlert from 'sweetalert2';
import { useSelector } from "react-redux";
import { RoleRouteFilter } from "../../helpers";
import { useLocation } from "react-router-dom";
import BaseModal from "./BaseModal";

export default function BaseHeader({ title, model, form, filters, createCallback }) {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.user);
    const { pathname, search } = useLocation();

    return <>
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-16">
            <Col span={8}>
                <h1 className="hp-mb-0">{title}</h1>
            </Col>
            <Col span={16} className='hp-text-right'>
                <Space>
                    {!isEmpty(form?.create?.fields) && RoleRouteFilter(null, form?.create?.routes, user, pathname + search) && <>
                        <Button type="primary" onClick={() => setShowModal(true)}>
                            <AddCircle set="curved" size={18} style={{ marginRight: 12 }} />
                            <span>{get(form, 'create.button.label', `Create ${title}`)}</span>
                        </Button>
                    </>}
                </Space>
            </Col>
        </Row>
        <Filters filters={filters} />
        {/* Modals */}
        <BaseModal modal={{ title, showModal, hideModal: () => setShowModal(false) }} form={{
            model, schema: form?.schema, fields: form?.create?.fields, readFields: form?.read?.fields, onSubmit: async () => {
                try {
                    setShowModal(false);
                    createCallback();
                    await SweetAlert.fire({ title: 'Done', text: `${model} Created!`, icon: 'success' });
                }
                catch (e) {
                    console.log(e);
                }
            }
        }} />
    </>
}