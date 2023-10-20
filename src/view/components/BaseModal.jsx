import { Card, Modal } from "antd";
import { startCase } from "lodash";
import BaseForm from "./BaseForm";

export default function BaseModal({ modal: { title, showModal, hideModal }, form: { model, schema, fields, readFields, values, onSubmit, form } }) {
    return <Modal
        title={<h4 className='hp-mb-0'>{Boolean(values) ? 'Update' : 'Create'} {startCase(title)}</h4>}
        open={showModal}
        onCancel={hideModal}
        footer={null}
    >
        <Card>
            <BaseForm model={model} schema={schema} fields={fields} readFields={readFields} values={values} form={form} onSubmit={onSubmit} />
        </Card>
    </Modal>
}