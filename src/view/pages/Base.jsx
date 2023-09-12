import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Divider } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import BaseBreadcrumb from "../components/BaseBreadcrumb";
import BaseHeader from "../components/BaseHeader";
import BaseTable from "../components/BaseTable";
import { useSelector } from "react-redux";
import { readData } from "../../common";
import { entries, isString, keys } from "lodash";
import { schema } from "../../models/schema";

export default function Base({ title, filters = [], model, form, data }) {
    // Hooks
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const user = useSelector(state => state.user);
    // Constants
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const filter = useMemo(() => filters?.[searchParams.get('filter')], [searchParams]);
    const sort = useMemo(() => searchParams.get('sort'), [searchParams]);
    // State
    const [tableData, setTableData] = useState([]);
    const getTableData = useCallback(async () => await readData({ user, filter: filter?.filter || null, model, fields: form?.read?.fields || [] }), [model, user, filter]);
    /**
     * Path fragments
     */
    useEffect(() => {
        if (user.appsync) {
            /**
             * 1.   Check if data is present
             *      1.1.    Check if data is from a model
             * 2.   Get Table Data
             */
            if (data) {
                if (isString(data) && data[0] === '@') {
                    // 1.1.
                    const [model, field] = data.slice(1).split('.');
                    const { fields } = schema.models[model];
                    let queryFields;

                    // TODO Check if specific fields are passed. Querying ALL fields for now.
                    if (fields[field].type.nonModel) {
                        queryFields = schema.nonModels[fields[field].type.nonModel].fields;
                    }
                    else if (fields[field].type.model) {
                        queryFields = schema.models[fields[field].type.model].fields;
                    }
                    // 
                    // 
                    // Check if model field is nested
                    console.log(schema.models[model], keys(queryFields), schema);
                    /**
                     * Move above code to common.readData
                     * 
                     * When creating/updating nested models, id = `${lowercase(model)}ID`, _version: model._version
                     */
                }
                else {
                    // JSON Data is provided 
                    setTableData(data);
                }
            }
            else {
                (async () => setTableData(await getTableData()))();
            }
        }
    }, [model, user, filter]);

    return <>
        {/* Header:START */}
        <BaseBreadcrumb pathFragments={pathFragments} />
        <BaseHeader model={model} title={filter?.name || title} form={form} filters={filters} createCallback={async () => setTableData(await getTableData())} />

        <Divider />
        <BaseTable data={tableData} columns={form?.read?.fields || []} schema={form?.schema || {}} actions={form?.read?.actions || []} model={model} />
        {/* <pre>{JSON.stringify({ pathname, title, filters, filter, model, pathFragments, tableData }, false, 4)}</pre> */}
        <pre>{JSON.stringify({ user, filter: filter?.filter || null, model, fields: form?.read?.fields || [] }, false, 4)}</pre>
        {/* Header:END */}
    </>
}