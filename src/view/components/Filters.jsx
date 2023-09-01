import { useNavigate } from "react-router-dom";
import { Space } from "antd";
import { entries, uniqueId } from "lodash";
import Pill from "../components/Pill";

export default function Filters({ filters }) {
    const navigate = useNavigate();
    return filters ? <Space>
        {entries(filters).map(([key, { name }], index) => <Pill index={index} key={uniqueId()} label={name} onClick={() => navigate(`?filter=${key}`)} />)}
    </Space> : null
}