import { Space } from "antd";
import { Edit } from "iconsax-react";
import BaseModal from "./BaseModal";
import SweetAlert from 'sweetalert2';
import { useState } from "react";

export default function BaseUpdateButton({ data, model, form, schema, callback }) {
    const [modalData, setModalData] = useState(null);


    return <>
        <Space onClick={() => setModalData(data)}><Edit size={24} /> Update</Space>
        <BaseModal modal={{ title: `Update ${model}`, showModal: Boolean(modalData), hideModal: () => setModalData(null) }} form={{
            model, schema, fields: form?.create?.fields, readFields: form?.read?.fields, values: modalData, onSubmit: async () => {
                try {
                    setModalData(null);
                    callback();
                    await SweetAlert.fire({ title: 'Done', text: `${model} Updated!`, icon: 'success' });
                }
                catch (e) {
                    console.log(e);
                }
            }
        }} />
    </>
}