import { Space } from "antd";

export default function FleetName({ name }) {
    return <Space direction="vertical">
        <p>{name}</p>
    </Space>
}