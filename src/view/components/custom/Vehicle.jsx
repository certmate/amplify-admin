import "./Vehicle.less";

export default function Vehicle({ rego }) {
    return <div className="number-plate">
        <div className="plate-background">
            <span className="plate-text">{rego}</span>
        </div>
    </div>
}