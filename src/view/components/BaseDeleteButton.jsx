import { Space } from "antd";
import { Edit, Trash } from "iconsax-react";
import BaseModal from "./BaseModal";
import SweetAlert from 'sweetalert2';
import { useState } from "react";
import { getChildModel, getParentModel, isChildNode } from "../../helpers";
import { schema } from "../../models/schema";
import { getData } from "../../common";
import { API, graphqlOperation } from "aws-amplify";
import { keys } from "lodash";

export default function BaseDeleteButton({ data, model, callback }) {

    const fx = async () => {
        const { id, _version } = data;

        let input, query;
        if (isChildNode(model)) {
            /**
             * 1.   Read child model data of parent model
             * 2.   Exclude deleting child from parent model
             * 3.   Update Parent
             * 4.   Success
             */
            // 1.
            let parentModel = getParentModel(model), childModel = getChildModel(model), fields;
            if (schema.models[parentModel].fields[childModel].type.nonModel) {
                fields = keys(schema.nonModels[schema.models[parentModel].fields[childModel].type.nonModel].fields);
            }
            else {
                console.error('Updating weird model', schema.models[parentModel].fields[childModel]);
            }
            const parent = await getData({ model, fields, id: data[parentModel].id });
            // 2.
            input = {
                id: parent.id,
                _version: parent._version,
                [childModel]: parent[childModel].filter(f => f.id !== id)
            }
            query = `
                    mutation Update${parentModel}(
                        $input: Update${parentModel}Input!
                    ){
                        update${parentModel}(input: $input){
                            id
                        }
                    }
                `;
            // console.log({ parentModel, childModel, fields, props, parent, input });
        }
        else {
            query = `
                    mutation Delete${model}(
                        $input: Delete${model}Input!
                    ){
                        delete${model}(input: $input){
                            id
                        }
                    }
                `;
            input = { id, _version };
        }

        try {
            await API.graphql(graphqlOperation(query, { input }));

            await callback();
            return await SweetAlert.fire({ title: 'Done', icon: 'success' });
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    return <Space onClick={fx}><Trash size={24} /> Delete</Space>
}