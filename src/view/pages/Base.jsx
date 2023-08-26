import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { startCase, uniqueId } from "lodash";
import Pill from "../components/Pill";
import Filters from "../components/Filters";
import { useEffect } from "react";

export default function Base({ title, filters = [], ...props }) {
    const { id } = useParams();
    const { pathname, search, hash } = useLocation();
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const sort = searchParams.get('sort');
    const navigate = useNavigate();

    

    return <>
        <Row gutter={[16, 16]} className="hp-ecommerce-app hp-mb-32">
            <Col span={24}>
                <h1 className="hp-mb-0">{title}</h1>
            </Col>
        </Row>
        <Filters filters={filters} />
        <Divider />
        <Outlet context={{ filter, sort }} ></Outlet>
        <pre>{JSON.stringify({ id, pathname, search, title, hash, filters, filter, props }, false, 4)}</pre>
    </>
}