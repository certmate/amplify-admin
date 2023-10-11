import { Tag } from "antd";
import { isNull } from "lodash";
import { Link } from "react-router-dom";

export default function CertStatus({ data, record }) {
    return isNull(record.inspector) ? <Tag color="gold">Pending Approval</Tag> : <Tag color="green">Active</Tag>;
    // return <pre>{JSON.stringify({ data, record }, false, 4)}</pre>
}