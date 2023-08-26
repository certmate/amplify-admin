import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { startCase, uniqueId } from "lodash";
import Pill from "../components/Pill";

export default function Filters({ filters }) {
    return <Space>
        {filters.map((filter, index) => <Pill index={index} key={uniqueId()} label={startCase(filter)} onClick={() => navigate(`?filter=${filter}`)} />)}
    </Space>
}