import { List, Space } from "antd";
import { deriveComponent } from "../BaseTable";
import { useMemo } from "react";
import { keys } from "lodash";

export default function AuditSections({ data }) {
    // const sections = useMemo(() => JSON.parse(data), [data]);
    return <List style={{width: 300}} dataSource={JSON.parse(data) || []} renderItem={({ title, result }) => <List.Item>
        <List.Item.Meta
            title={title}
        />
        <div className={`hp-text-color-${result === 'Clean' ? 'success' : 'danger'}-1`}>{result}</div>
    </List.Item>} />
}