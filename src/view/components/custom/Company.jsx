import { Space } from "antd";
import { deriveComponent } from "../BaseTable";

export default function Company({ name, logo }) {
    return <div style={{minWidth: 200}} >
        {deriveComponent("image", logo)}<br />
        <p className="hp-mb-0">{name}</p>
    </div>
}