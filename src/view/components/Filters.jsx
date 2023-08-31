import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { entries, startCase, uniqueId, values } from "lodash";
import Pill from "../components/Pill";

export default function Filters({ filters }) {
    const navigate = useNavigate();
    return filters ? <Space>
        {entries(filters).map(([key, { name }], index) => <Pill index={index} key={uniqueId()} label={name} onClick={() => navigate(`?filter=${key}`)} />)}
    </Space> : null
}