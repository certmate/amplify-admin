import { Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { getModelRouteFields, getParentModel } from "../../helpers";
import { useSelector } from "react-redux";
import { readData } from "../../common";
import { routes } from "../../settings";
import Title from "antd/lib/typography/Title";

export default function ParentPicker({ model, onPick, parent }) {
    const user = useSelector(state => state.user);
    const parentModel = useMemo(() => getParentModel(model), [model]);
    const [parents, setParents] = useState([]);
    const [selectedParent, setSelectedParent] = useState();

    useEffect(() => {
        (async () => {
            const { id, _version, name, logo } = (await readData({ user, model: parentModel, fields: getModelRouteFields({ routes, model: parentModel, fieldType: 'read' }) }))[0];
            onPick({ id, _version, name, logo });
        })()

        return () => setSelectedParent(null);
    }, [model]);

    return <></>
}