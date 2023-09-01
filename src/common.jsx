// TODO Enter common actions here
import { Space } from "antd";
import { Trash } from "iconsax-react";

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, isString, lowerCase } from "lodash";

export const deleteColumn = async ({ id, _version }, model) => {
    console.log(`Deleting ${model}:${id}-${_version}`);
}

export const readData = async ({ model, fields, user, filter }) => {
    const modelSchema = schema.models[model];
    console.log(schema.models[model]);
    const plural = lowerCase(modelSchema.pluralName);
    // Check for nested fields - pick selected fields of model
    fields = fields.map(f => {
        if(f.includes('.')){
            const [field, columns] = f.split('.');
            // 
            // Check if model
            const { type, isArray } = modelSchema.fields[field];
            if(type === 'model' && isArray){
                return `
                    ${field}{
                        items{
                            ${columns.split(',').join('\n')}
                        }
                    }
                `;
            }
            else{
                return `
                    ${field}{
                        ${columns.split(',').join('\n')}
                    }
                `
            }
        }
        else{
            return f;
        }
    });

    try {
        const { data } = await API.graphql(graphqlOperation(`
            query GetBase($filter: Model${schema.models[model].name}FilterInput){
                getBase(id: "${user.appsync.base}"){
                    ${plural}(
                        filter: $filter
                    ){
                        items{
                            ${fields.join(`\n`)}
                        }
                    }
                }
            }
        `, { filter }));

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

/**
 * 
 * @param {Array|String} options 
 * 
 */
export const getSelectFields = async options => {
    if(isArray(options)){
        return options.map(o => ({ label: o, value: o }));
    }
    else if(isString(options)){
        if(options[0] === '@'){
            /**
             * Fetch model records
             */
        }
    }
}