import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { entries, isEmpty, startCase, uniqueId } from "lodash";
import Pill from "../components/Pill";
import Filters from "../components/Filters";
import { useEffect, useMemo, useState } from "react";
import { routes } from "../../settings";
import graphqlSchema from "../../graphql/schema";
import CreateUpdateModal from "../components/CreateUpdateModal";

export default function Base({ title, filters = [], model }) {
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
    /**
     * 
     * Get schemas
     * 
     */console.log(graphqlSchema.data.__schema);
    const createSchema = useMemo(() => graphqlSchema.data.__schema.types.find(({ name }) => name === `Create${model}Input`)?.inputFields, [model]);

    return <>
        {/* Header:START */}
        <Row gutter={[16, 16]} align="middle" className="hp-ecommerce-app hp-mb-32">
            <Col span={8}>
                <h1 className="hp-mb-0">{title}</h1>
            </Col>
            <Col span={16} className='hp-text-right'>
                <Space>
                    <Row gutter={[16, 16]} justify="end">
                        <Col>
                            <Input placeholder={`Search ${title}`} prefix={<SearchNormal1 size={18} />} />
                        </Col>
                        <Col>
                            <Button type="primary">
                                <SearchNormal set="curved" size={18} style={{ marginRight: 12 }} />
                                Search
                            </Button>
                        </Col>
                    </Row>
                    {!isEmpty(createSchema) && <>
                        <Divider type="vertical" />
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
        {pathFragments.length === 1 ? <>Show Base!</> : <Outlet context={{ filter, sort }} ></Outlet>}
        <pre>{JSON.stringify({ id, pathname, search, title, hash, filters, filter, model, pathFragments }, false, 4)}</pre>
        {/* Modals */}
        <CreateUpdateModal schema={createSchema} open={showModal} title={title} close={() => setShowModal(false)} />
    </>
}