import { useSelector } from "react-redux";
import BaseForm from "./BaseForm";
import { useEffect, useState } from "react";
import { getData } from "../../common";

export default function BaseAccount({ form }) {
    const user = useSelector(state => state.user);
    const [values, setValues] = useState(null);

    useEffect(() => {
        user?.appsync && (async () => {
            setValues(await getData({ model: 'User', fields: form.create.fields, id: user.appsync.id }))
        })();
    }, [user]);
    return <>
        Account
        <BaseForm model='User' schema={form.schema} fields={form.create.fields} values={values} form={form} onSubmit={() => {
            console.log('Updating User');
        }} />
    </>
}