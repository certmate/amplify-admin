import { Space } from "antd";
import { deriveComponent } from "../../BaseTable";

export default function Company({ name, logo }) {
    return <Space>
        {deriveComponent("image", logo)}
        <p className="hp-mb-0">{name}</p>
    </Space>
}