import { Link } from "react-router-dom";
import { schema } from "../../../models/schema";
import { useEffect } from "react";

export default function ShareResourceSelector({ field, setFieldValue, isSubmitting }) {
    useEffect(() => { console.log({ schema }) }, [field]);

    return <pre>{JSON.stringify({ schema }, false, 4)}</pre>
}