import { Space } from "antd";
import { deriveComponent } from "../../BaseTable";

export default function Vehicle(data) {
    return <Space>
        {/* {deriveComponent("image", logo)} */}
        <p className="hp-mb-0">{JSON.stringify(data, false, 4)}</p>
    </Space>
}