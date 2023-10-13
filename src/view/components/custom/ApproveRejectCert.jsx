import { Space, Popconfirm } from "antd";
import { TickSquare } from "iconsax-react";
import { useState } from "react";
import { updateCert } from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import SweetAlert from 'sweetalert2';

export default function ApproveRejectCert({ data, callback }) {
    const [showShareModal, setShowShareModal] = useState(false);
    const [initialValues, setInitialValues] = useState({ email: '' });

    return <Popconfirm
        title="Accept/Rejecct a Certificate"
        description="Are you sure to delete this task?"
        onConfirm={async () => {
            try {
                /**
                 * Update read array of cert
                 * 1.   Get existing read array
                 * 2.   append
                 */
                const { id, _version } = data;
                await API.graphql(graphqlOperation(updateCert, { input: {
                    id,
                    _version,
                    status: 'A'
                } }));
    
                await callback();
                await SweetAlert.fire({ title: 'Done', icon: 'success' });
                resetForm();
                setShowShareModal(false);
            } catch (error) {
                console.log({error});
            }
        }}
        onCancel={async () => {
            try {
                /**
                 * Update read array of cert
                 * 1.   Get existing read array
                 * 2.   append
                 */
                const { id, _version } = data;
                await API.graphql(graphqlOperation(updateCert, { input: {
                    id,
                    _version,
                    status: 'R'
                } }));
    
                await callback();
                await SweetAlert.fire({ title: 'Done', icon: 'success' });
                resetForm();
                setShowShareModal(false);
            } catch (error) {
                console.log({error});
            }
        }}
        okText="Approve"
        cancelText="Reject"
    >
        <Space onClick={() => setShowShareModal(true)}><TickSquare size={24} /> Approve/Reject</Space>
    </Popconfirm>

}