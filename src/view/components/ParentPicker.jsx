import { Button, Input, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Formik } from "formik";
import { object } from "yup";
import { Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanNull, getModelRouteFields, getParentModel } from "../../helpers";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { entries, isArray, pick } from "lodash";
import { readData } from "../../common";
import { routes } from "../../settings";

export default function ParentPicker({ model, onPick }) {
    const user = useSelector(state => state.user);
    const parentModel = useMemo(() => getParentModel(model), [model]);
    const [parents, setParents] = useState([]);

    useEffect(() => {
        (async () => setParents(await readData({ user, model: parentModel, fields: getModelRouteFields({ routes, model: parentModel, fieldType: 'read' }) })))()
    }, [model]);

    return <pre>{JSON.stringify({ parents, model }, false, 4)}Nik</pre>
}