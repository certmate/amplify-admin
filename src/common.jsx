// TODO Enter common actions here
import { Space } from "antd";
import { Edit, Trash } from "iconsax-react";

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, isString, isUndefined, lowerCase, omit, values, first, keys } from "lodash";
import { routes } from "./settings";
import { getChildModel, getParentModel, hasArrayOfValues, isChildNode } from "./helpers";
import SweetAlert from 'sweetalert2';
import BaseUpdateButton from "./view/components/BaseUpdateButton";
import BaseDeleteButton from "./view/components/BaseDeleteButton";
import { getUser } from "./graphql/customQueries";

export const actions = {
    update: {
        component: ({ data, model, form, callback, schema }) => <BaseUpdateButton data={data} model={model} form={form} schema={schema} callback={callback} />,
    },
    delete: {
        component: ({ data, model, callback }) => <BaseDeleteButton data={data} model={model} callback={callback} />,
    }
}

// TODO Specify user fields
export const getUserFromAppSync = async cognitoUser => {
    const get = async cognitoUser => {
        try {
            return await API.graphql(
                graphqlOperation(getUser, {
                    id: cognitoUser.attributes.email,
                })
            );
        }
        catch (e) {
            return e;
        }
    }
    let d = await get(cognitoUser);

    if (!d.data.getUser) {
        try {
            const base = v4();

            await API.graphql(
                graphqlOperation(createUserAndBase, {
                    user: {
                        id: cognitoUser.attributes.email,
                        email: cognitoUser.attributes.email,
                        base: base
                    },
                    base: {
                        id: base
                    }
                })
            );
            d = await get(cognitoUser);
        }
        catch (e) {
            console.log(e);
        }
    }

    return { ...d.data.getUser };
}

const getQueryFieldsAndChildNode = ({ model, fields }) => {
    // 
    // Check for child node
    let childNode;
    if (model[0] === '@') {
        [model, childNode] = model.slice(1).split('.');
    }
    // 
    // 
    const modelSchema = schema.models[model];

    // Check for nested fields - pick selected fields of model
    fields = fields.map(f => {
        if (hasArrayOfValues(f)) {
            return f.split(':@')[0];
        }
        else if (f.includes('.')) {
            let [field, columns] = f.split('.');
            // 
            // 
            field = field.split(/[^a-zA-Z]/)[0];
            // 
            // Check if model
            // console.log({ modelSchema, field })
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

    return [queryFields, childNode, model];
}
/**
 * 
 * @param {NewType} param0 
 * @returns 
 */
export const readData = async ({ model, fields, user, filter }) => {

    let queryFields, childNode;
    [queryFields, childNode, model] = getQueryFieldsAndChildNode({ model, fields });
    const { pluralName, name } = schema.models[model];
    const plural = lowerCase(pluralName);

    // # TODO Fix this!! the child model identifier
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
                                    ${fields.map(f => first(f.split(':@'))).join(`\n`)}    
                                }
                            ` : ''
        }
                    }
                }
            }
        }
    `;

    try {
        const { data } = await API.graphql(graphqlOperation(query, { filter: { ...filter, _deleted: { ne: true } } }));
        const items = data.getBase[plural].items;
        if (childNode) {
            let data = [];
            items.forEach(item => {
                data = item[childNode] ? [...data, ...item[childNode].map(c => ({ ...c, [model]: omit(item, [childNode]) }))] : data;
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

export const getData = async ({ model, fields, id }) => {
    let queryFields, childNode;
    [queryFields, childNode, model] = getQueryFieldsAndChildNode({ model, fields });
    const { name } = schema.models[model];

    const query = `
        query GetModel($id: ID!){
            get${name}(id: $id){
                id
                _version
                ${queryFields.join('\n')}
                ${childNode ? `
                        ${childNode}{
                            ${fields.join(`\n`)}    
                        }
                    ` : ''
        }           
            }
        }
    `;

    try {
        const { data } = await API.graphql(graphqlOperation(query, { id }));
        return data[`get${name}`];
    }
    catch (e) {
        console.log(e);
        return [];
    }
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

/**
 * 
 * @param {*} param0 
 */
export const shareModelWithUser = async ({ data, model, user, shareWith, accessLevel }) => {
    /**
     * 1.   Create notification
     */
    console.log('Sharing', { data, model, user, shareWith });
}