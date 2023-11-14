import { Link } from "react-router-dom";

export default function User({ name, id }) {
    return <p className="hp-mb-0" style={{ minWidth: 150 }}><Link to={`/companies/members?id=${id}`}>{name}</Link></p>
}