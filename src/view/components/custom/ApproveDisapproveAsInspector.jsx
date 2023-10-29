import { Button, Card, Input, Modal, Space, Form } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Share, TickCircle } from "iconsax-react";
import { useState } from "react";
import { object, string } from "yup";
import { updateCert } from "../../../graphql/mutations";
import { getData, upsertData } from "../../../common";
import { API, graphqlOperation } from "aws-amplify";
import SweetAlert from 'sweetalert2';
import { omit, uniq } from "lodash";

export default function ApproveDisapproveAsInspector({ data, model, callback }) {
    const [showShareModal, setShowShareModal] = useState(false);
    const [initialValues, setInitialValues] = useState({ email: '' });

    return <Space onClick={async () => {
        console.log('Approve!', { data });
        const roles = !data.approveInspector ? [...data.roles, 'Inspector'] : data.roles.filter(f => f !== 'Inspector');
        try{
            await API.graphql(
                graphqlOperation(`
                    mutation UpdateUser($input: UpdateUserInput!){
                        updateUser(input: $input){
                            id
                        }
                    }
                `, {
                    input: {
                        id: data.id,
                        _version: data._version,
                        approveInspector: !data.approveInspector,
                        roles: uniq(roles)
                    }
                })
            );
        }
        catch(e){
            console.log(e);
        }
        await SweetAlert.fire({ title: 'Done', icon: 'success' });
        callback();
    }}><TickCircle size={24} /> {data.approveInspector ? 'Disapprove' : 'Approve'} Inspector</Space>
}