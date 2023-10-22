import { Space, Popconfirm } from "antd";
import { TickSquare } from "iconsax-react";
import { useState } from "react";
import { updateCert } from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import SweetAlert from 'sweetalert2';
import { useSelector } from "react-redux";

export default function ApproveRejectCert({ data, callback }) {
    const user = useSelector(state => state.user);

    return <Popconfirm
        title="Accept/Rejecct a Certificate"
        description="Are you sure to approve this certificate?"
        onConfirm={async () => {
            try {
                /**
                 * Update read array of cert
                 * 1.   Get existing read array
                 * 2.   append
                 */
                const { id, _version } = data;
                await API.graphql(graphqlOperation(updateCert, {
                    input: {
                        id,
                        _version,
                        status: 'A',
                        inspectorID: user.appsync.id
                    }
                }));

                await callback();
                await SweetAlert.fire({ title: 'Done', icon: 'success' });
            } catch (error) {
                console.log({ error });
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
                await API.graphql(graphqlOperation(updateCert, {
                    input: {
                        id,
                        _version,
                        status: 'R',
                        inspectorID: user.appsync.id
                    }
                }));

                await callback();
                await SweetAlert.fire({ title: 'Done', icon: 'success' });
                resetForm();
            } catch (error) {
                console.log({ error });
            }
        }}
        okText="Approve"
        cancelText="Reject"
    >
        <Space><TickSquare size={24} /> Approve/Reject</Space>
    </Popconfirm>

}