import { Table, Space } from "antd";
import { has, isFunction, isObject, startCase, set, find, isEmpty } from "lodash";
import { RoleRouteFilter, getFieldsOfParentModel, getParentModel, hasArrayOfValues } from "../../helpers";
import { useSelector } from "react-redux";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { readData } from "../../common";
import SweetAlert from 'sweetalert2';

export const deriveComponent = (type, data) => {
    switch (type) {
        case "image":
            return <StorageImage height={100} width={100} imgKey={data} accessLevel="public" fallbackSrc="data:image/png;base64,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" />

        default:
            return <p className="hp-mb-0">{isObject(data) ? JSON.stringify(data) : data}</p>;
    }
}

export default function BaseTable({ data, columns, schema, actions, model }) {
    const user = useSelector(state => state.user);
    const { pathname, search } = useLocation();
    const [tableData, setTableData] = useState(data || []);
    const [tableColumns, setTableColumns] = useState([]);
    const navigate = useNavigate();

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
                    if(RoleRouteFilter(roles, null, user, null)){
                        !has(cache, m) && set(cache, m, await readData({ model: m, fields: getFieldsOfParentModel(modelData), user, filter: null }));
                        // 
                        // Replace all tabledata column with respective fields
                        // TODO For now, look up is via `id`. Have flexibility of which field to look
                        setTableData(data?.map(item => ({ ...item, [fieldData]: item[fieldData].map( id => find(cache[m], { id: id }) ) })));
                        c.push({ ...schema[fieldData], column: fieldData});
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

    return <>
        <Table dataSource={tableData.map((d, key) => ({ ...d, key }))} columns={
            [
                // data columns
                ...tableColumns.map(({ label, column, table }) => ({
                    title: startCase(label),
                    key: label,
                    ...(table?.columnProps || {}),
                    render: record => isFunction(table?.component) ? table?.component(record[column]) : deriveComponent(table?.component, record[column])
                })),
                // actions
                {
                    title: 'Actions',
                    key: 'actions',
                    render: d => <Space size="large">
                        {actions.filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, pathname + search)).map(({ label, _fx, fx }, key) => <a key={`action-${key}`} onClick={async () => {
                            await _fx(d, model, () => fx(d));

                            await SweetAlert.fire({ title: 'Done', icon: 'success' });
                            navigate(0);
                        }}>{label}</a>)}
                    </Space>
                }
            ]
        }  
        scroll={{ x: 1000 }} />
    </>
}
