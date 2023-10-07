import { Tag } from "antd";
import { values } from "lodash";

export default function Vehicle(vehicles) {
    return values(vehicles).map(({ make, model, rego }, key) => <Tag key={key} className={key > 0 ? 'hp-mt-8' : ''}>{rego} | {make} {model}</Tag>)
}