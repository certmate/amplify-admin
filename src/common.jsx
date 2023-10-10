// TODO Enter common actions here
import { Space } from "antd";
import { Edit, Trash } from "iconsax-react";

import { schema } from "./models/schema";
import { API, graphqlOperation } from 'aws-amplify';
import { isArray, isString, isUndefined, lowerCase, omit, values, first, keys } from "lodash";
import { routes } from "./settings";
import { getChildModel, getParentModel, hasArrayOfValues, isChildNode } from "./helpers";
import SweetAlert from 'sweetalert2';

export const actions = {
    update: {
        label: <Space><Edit size={24} /> Update</Space>,
        name: 'update',
        _fx: async ({ id, _version, ...payload }, model, fx, parentFx) => {

            console.log(`Updating ${model}:${id}-${_version}`);
        }
    },
    delete: {
        label: <Space><Trash size={24} /> Delete</Space>,
        _fx: async ({ id, _version, ...props }, model, fx, parentFx) => {
            console.log(`Deleting ${model}:${id}-${_version}`);
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
                const parent = await getData({ model, fields, id: props[parentModel].id });
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

                await fx();
                await parentFx();
                return await SweetAlert.fire({ title: 'Done', icon: 'success' });
            }
            catch (e) {
                console.log(e);
                return false;
            }
        }
    }
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
            console.log({ modelSchema, field })
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
    console.log({ query });
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