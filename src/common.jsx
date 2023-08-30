// TODO Enter common actions here
import { Space } from "antd";
import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Trash, Truck } from "iconsax-react";

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { lowerCase } from "lodash";

export const deleteColumn = async ({ id, _version }, model) => {
    console.log(`Deleting ${model}:${id}-${_version}`);
}

export const readData = async ({ model, fields, user, filter }) => {
    const plural = lowerCase(schema.models[model].pluralName);
    try {
        const { data } = await API.graphql(graphqlOperation(`
            query GetBase{
                getBase(id: "${user.appsync.base}"){
                    ${plural}(
                        filter: ${JSON.parse(filter)}
                    ){
                        items{
                            ${fields.join(`\n`)}
                        }
                    }
                }
            }
        `));

        return data.getBase[plural].items;
    }
    catch (e) {
        console.log(e);
        return [];
    }
};

export const deleteRecord = {
    label: <Space><Trash size={24} /> Delete</Space>,
    fx: deleteColumn
}