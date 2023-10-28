import { Tag } from "antd";
import { isNull } from "lodash";
import { Link } from "react-router-dom";

export default function CertStatus({ data, record }) {
    return isNull(record.status) ? <Tag color="gold">Pending Approval</Tag> :
        record.status === 'A' ? <Tag color="green">Active</Tag> :
            record.status === 'R' ? <Tag color="red">Rejected</Tag> :
                record.status === 'E' ? <Tag color="#c00000">Superceded</Tag> :
                    isNull(record.inspector) ? <Tag color="gold">Pending Approval</Tag> : null;
    // return <pre>{JSON.stringify({ data, record }, false, 4)}</pre>
}