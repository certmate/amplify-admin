import { keys } from "lodash";


export default function CreateAuditSections(data) {
    return <pre>{JSON.stringify(keys(data), false, 4)}</pre>
}