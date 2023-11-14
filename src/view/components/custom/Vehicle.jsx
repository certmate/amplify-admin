import "./Vehicle.less";
import { Link } from "react-router-dom";

export default function Vehicle({ rego, id }) {
    return <Link to={`/vehicles?id=${id}`}>{rego}</Link>
    // return <div className="number-plate">
    //     <div className="plate-background">
    //         <span className="plate-text">{rego}</span>
    //     </div>
    // </div>
}