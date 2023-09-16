// TODO Enter common actions here
import { Space } from "antd";
import { Trash } from "iconsax-react";

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, isString, isUndefined, lowerCase, omit, values } from "lodash";
import { routes } from "./settings";

export const deleteColumn = async ({ id, _version }, model) => {
    console.log(`Deleting ${model}:${id}-${_version}`);
}

/**
 * 
 * @param {NewType} param0 
 * @returns 
 */
export const readData = async ({ model, fields, user, filter }) => {
    // 
    // Check for child node
    let childNode;
    if (model[0] === '@') {
        [model, childNode] = model.slice(1).split('.');
    }
    // 
    // 
    const { pluralName, name, ...modelSchema } = schema.models[model];
    const plural = lowerCase(pluralName);

    // Check for nested fields - pick selected fields of model
    fields = fields.map(f => {
        if (f.includes('.')) {
            const [field, columns] = f.split('.');
            // 
            // Check if model
            const { type, isArray } = modelSchema.fields[field];
            if (type === 'model' && isArray) {
                return `
                    ${field}{
                        items{
                            ${columns.split(',').join('\n')}
                        }
                    }
                `;
            }
            else {
                return `
                    ${field}{
                        ${columns.split(',').join('\n')}
                    }
                `
            }
        }
        else {
            return f;
        }
    });

    /**
     * If childNode is present, include fields of the parent Model.
     * We needs these fields to show the parent in read table and use the parent id, _version in mutations.
     */
    const queryFields = childNode ? values(routes).filter(r => r.model === model)[0].form.read.fields : fields;

    const query = `
        query GetBase($filter: Model${name}FilterInput){
            getBase(id: "${user.appsync.base}"){
                ${plural}(
                    filter: $filter
                ){
                    items{
                        ${queryFields.join('\n')}
                        ${childNode ? `
                                ${childNode}{
                                    ${fields.join(`\n`)}    
                                }
                            ` : ''
                        }
                    }
                }
            }
        }
    `;

    try {
        const { data } = await API.graphql(graphqlOperation(query, { filter }));
        const items = data.getBase[plural].items;
        if (childNode) {
            let data = [];
            items.forEach(item => {
                data = item[childNode] ? [...data, ...item[childNode].map(c => ({ ...c, [model]: omit(c, [childNode])}))] : data;
            });

            return data;
        }
        else {
            return items;
        }
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
    if (isArray(options)) {
        return options.map(o => ({ label: o, value: o }));
    }
    else if (isString(options)) {
        if (options[0] === '@') {
            /**
             * Fetch model records
             */
        }
    }
}