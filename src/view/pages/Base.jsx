import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal, Card } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { entries, isEmpty, startCase, uniqueId } from "lodash";
import Pill from "../components/Pill";
import Filters from "../components/Filters";
import { useEffect, useMemo, useState } from "react";
import { routes } from "../../settings";
import graphqlSchema from "../../graphql/schema";
import BaseForm from "../components/BaseForm";
import * as mutations from "../../graphql/mutations";
import SweetAlert from 'sweetalert2';
import { API, graphqlOperation } from 'aws-amplify';

export default function Base({ title, filters = [], model, form }) {
    const { id } = useParams();
    const { pathname, search, hash } = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const sort = searchParams.get('sort');
    const navigate = useNavigate();
    /**
     * Path fragments
     */
    const [...pathFragments] = pathname.split('/').filter(Boolean);

    return <>
        {/* Header:START */}
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-32">
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
        <Divider />
        {/* Header:END */}
        {/* Child */}
        <Outlet context={{ filter, sort }} ></Outlet>
        <pre>{JSON.stringify({ id, pathname, search, title, hash, filters, filter, model, pathFragments }, false, 4)}</pre>
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
                        await API.graphql(graphqlOperation(mutations[`create${model}`], { input }));
                        setShowModal(false);
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