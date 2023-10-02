import { List, Space, Tag } from "antd";
import { deriveComponent } from "../../BaseTable";
import Title from "antd/lib/typography/Title";
import { values } from "lodash";

export default function Vehicle(vehicles) {
    return values(vehicles).map(({ make, model, rego }, key) => <Tag key={key}>{rego} | {make} {model}</Tag>)
}