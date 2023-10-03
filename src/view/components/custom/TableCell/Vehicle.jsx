import { Tag } from "antd";
import { values } from "lodash";

export default function Vehicle(vehicles) {
    return values(vehicles).map(({ make, model, rego }, key) => <Tag key={key}>{rego} | {make} {model}</Tag>)
}