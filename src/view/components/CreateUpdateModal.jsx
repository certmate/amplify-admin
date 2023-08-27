import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal, Skeleton, Badge, Descriptions } from "antd";
import { startCase } from "lodash";

export default function CreateUpdateModal({ schema, title, open, close }) {
    return <Modal
        width={1200}
        title={<h4 className='hp-mb-0'>{startCase(title)}</h4>}
        open={open}
        onOk={close}
        onCancel={close}
    >
        <pre>{JSON.stringify({ schema }, false, 4)}</pre>
    </Modal>
}