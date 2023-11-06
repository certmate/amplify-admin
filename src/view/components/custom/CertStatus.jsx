import { Tag } from "antd";
import { isNull } from "lodash";
import { Link } from "react-router-dom";

export const getStatusColorAndText = ({ status, type }) => {
    return type === 'Self Declaration' ? ['#1e90ff', 'This Self Declaration Certificate certifies this vehicle as clean']
        : status === 'P' ? ['gold', 'This Vehicle Hygiene Certificate is Pending Approval']
            : status === 'A' ? ['green', 'This Vehicle Hygiene Certificate is Valid & Active']
                : status === 'R' ? ['orange', 'This Vehicle Hygiene Certificate has been rejected and is invalid']
                    : status === 'E' ? ['#c00000', 'This Vehicle Hygiene Certificate has been superceded and is invalid']
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