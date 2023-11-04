// TODO Enter common actions here

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, isString, lowerCase, omit, values, first, deburr, chain, entries, isEmpty, get, isObject } from "lodash";
import { routes } from "./settings";
import { cleanEmptyConnections, hasArrayOfValues } from "./helpers";
import BaseUpdateButton from "./view/components/BaseUpdateButton";
import BaseDeleteButton from "./view/components/BaseDeleteButton";
import { getUser } from "./graphql/customQueries";
import { v4 } from "uuid";

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
        // 
        // 
        // Check if field is an object
        let filter = f.filter, fld = f.field || f;
        
        if (hasArrayOfValues(fld)) {
            return fld.split(':@')[0];
        }
        else if (fld.includes('.')) {
            let [field, columns] = fld.split('.');
            // 
            // 
            field = field.split(/[^a-zA-Z]/)[0];
            // 
            // Check if model
            // console.log({ modelSchema, field })
            const { type, isArray } = modelSchema.fields[field];
            if (type?.model && isArray) {
                return `
                    ${field}${filter ? `(filter: ${filter})` : ''}{
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
            return fld;
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

export const upsertData = async ({ query, payload, schema, user }) => {
    /**
     * Check searchable fields
     */
    if(schema){
        const searchableFields = entries(schema).filter(([ _, { searchable } ]) => searchable);
        if(!isEmpty(searchableFields)){
            const tags = [];
            entries(searchableFields).forEach(([_, [field]]) => {
                payload[field] && tags.push(chain(JSON.stringify(payload[field])).deburr().camelCase().toLower())
            });
            payload.tags = tags.join('');
        }
    }
    /**
     * Check base & read & id
     */
    if(!payload._version){
        // Is create
        payload.id = get(payload, 'id', v4());
        payload.base = get(payload, 'base', user.appsync.base);
        payload.read = get(payload, 'read', [user.appsync.base]);
    }
    
    try{
        await API.graphql(graphqlOperation(query, { input: cleanEmptyConnections(payload) }));
    }
    catch(e){
        console.log(e)
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


export const userHasOnboared = user => {
    const fields = routes['/account'].form.onboardingFields;

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if(!get(user, field, false)){
            return false;
        }
    }

    return true;
}