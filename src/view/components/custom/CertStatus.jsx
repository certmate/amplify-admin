import { Tag } from "antd";
import { isNull } from "lodash";
import { Link } from "react-router-dom";

export const getStatusColorAndText = status => {
    return status === 'P' ? ['gold', 'This certificate is Pending Approval']
        : status === 'A' ? ['green', 'This certificate is Valid & Active']
            : status === 'R' ? ['orange', 'This certificate has been rejected and is invalid']
                : status === 'E' ? ['#c00000', 'This certificate has been superceded and is invalid']
                    : ['black', 'Unknown Status']
}

export default function CertStatus({ data, record }) {
    return record.type === 'Self Declaration' ? <Tag color="blue">Self Declaration</Tag> :
        isNull(record.status) || record.status === 'P' ? <Tag color="gold">Pending Approval</Tag> :
            record.status === 'A' ? <Tag color="green">Active</Tag> :
                record.status === 'R' ? <Tag color="orange">Rejected</Tag> :
                    record.status === 'E' ? <Tag color="#c00000">Superceded</Tag> :
                        isNull(record.inspector) ? <Tag color="gold">Pending Approval</Tag> : null;
    // return <pre>{JSON.stringify({ data, record }, false, 4)}</pre>
}