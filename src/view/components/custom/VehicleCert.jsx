import { Space, Tag } from "antd";
import { deriveComponent } from "../BaseTable";
import CertStatus from "./CertStatus";

export default function VehicleCert({ items }) {
    return <Space direction="vertical">
        {items?.map(({ id, status, number }, key) => <Space key={id} className={key > 0 ? 'hp-mt-8' : ''}>{number} | <CertStatus record={{status}} /></Space>)}
    </Space>
    // return <Space>
    //     {deriveComponent("image", logo)}
    //     <p className="hp-mb-0">{name}</p>
    // </Space>
}