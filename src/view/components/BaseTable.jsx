import { Table, Space } from "antd";
import { has, isFunction, isObject, startCase, set, find } from "lodash";
import { RoleRouteFilter, ConditionalFilter, getFieldsOfParentModel, getParentModel, hasArrayOfValues } from "../../helpers";
import { useSelector } from "react-redux";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { readData } from "../../common";

export const deriveComponent = (type, data) => {
    switch (type) {
        case "image":
            console.log('image', data);
            return data ? <StorageImage height={100} width={100} imgKey={data} fallbackSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" accessLevel="public" /> : <img height={100} width={100} src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />

        default:
            return <p className="hp-mb-0">{isObject(data) ? JSON.stringify(data) : data}</p>;
    }
}

export default function BaseTable({ data, columns, schema, actions, model, form, callback }) {
    const user = useSelector(state => state.user);
    const { pathname, search } = useLocation();
    const [tableData, setTableData] = useState(data || []);
    const [tableColumns, setTableColumns] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => { data && setTableData(data) }, [data]);

    useEffect(() => {
        // Shouldn't be hidden
        // Should pass RoleRouteFilter
        user.appsync && data && (async () => {
            let c = [], cache = {}; // Cache is calculated every time columns are calculated
            for (const i in columns) {
                const column = columns[i];
                if (schema[column]) {
                    const { hidden, roles } = schema[column];
                    !hidden && RoleRouteFilter(roles, null, user, null) && c.push({ ...schema[column], column });
                }
                else if (hasArrayOfValues(column)) {
                    // field:@Model.field1,field2,field3
                    // Read from model, based on id
                    let [fieldData, modelData] = column.split(':'),
                        m = getParentModel(modelData);

                    const { roles } = schema[fieldData];
                    if (RoleRouteFilter(roles, null, user, null)) {
                        !has(cache, m) && set(cache, m, await readData({ model: m, fields: getFieldsOfParentModel(modelData), user, filter: null }));
                        // 
                        // Replace all tabledata column with respective fields
                        // TODO For now, look up is via `id`. Have flexibility of which field to look
                        setTableData(data?.map(item => ({ ...item, [fieldData]: item[fieldData]?.map(id => find(cache[m], { id: id })).filter(Boolean) })));
                        c.push({ ...schema[fieldData], column: fieldData });
                    }
                }
                else if (column.includes('.')) {
                    // Nested properties, to be shown in the same column
                    let [col, subCols] = column.split('.');
                    const { roles } = schema[col];

                    RoleRouteFilter(roles, null, user, null) && c.push({ ...schema[col], column: col, nested: subCols.split(',').map(s => `${col}.${s}`) });
                }
            }
            setTableColumns(c);
        })();
    }, [columns, user.appsync, data]);

    useEffect(() => {
        if (searchParams.get('id')) {
            console.log('Show User')
        }
    }, [searchParams]);

    return <Table dataSource={tableData.map((d, key) => ({ ...d, key }))} columns={
        [
            // data columns
            ...tableColumns.map(({ label, column, table }) => ({
                title: startCase(label),
                key: label,
                ...(table?.columnProps || {}),
                render: record => <>
                    {isFunction(table?.component) ? table?.component(record[column], record) : deriveComponent(table?.component, record[column])}
                </>
            })),
            // actions
            actions.filter(({ roles, routes, condition }) => RoleRouteFilter(roles, routes, user, pathname + search) && ConditionalFilter(condition, data)).length ? {
                title: 'Actions',
                key: 'actions',
                render: data => <Space size="large">
                    {/* TODO Format Filters to accept an array of filters */}
                    {actions.filter(({ roles, routes, condition }) => RoleRouteFilter(roles, routes, user, pathname + search) && ConditionalFilter(condition, data)).map(({ component, fx }, key) => (
                        <a key={`action-${key}`}>
                            {/* Render Component */}
                            {component({ data, model, form, schema, callback: async () => { 
                                // Check if custom fx is called and execute it on callback
                                isFunction(fx) && await fx(); callback();  // Execute parent callback
                            } })}
                        </a>
                    ))}
                </Space>
            } : []
        ]
    }
        scroll={{ x: 1000 }} />
}
