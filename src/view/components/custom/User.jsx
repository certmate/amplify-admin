import { Link } from "react-router-dom";

export default function User({ name, id }) {
    return <Link to={`/companies/members?id=${id}`}>{name}</Link>
}