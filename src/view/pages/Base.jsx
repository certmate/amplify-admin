import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Divider, Skeleton } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import BaseBreadcrumb from "../components/BaseBreadcrumb";
import BaseHeader from "../components/BaseHeader";
import BaseTable from "../components/BaseTable";
import { useSelector } from "react-redux";
import { readData } from "../../common";
import { entries, first, isObject, isString, keys } from "lodash";
import { schema } from "../../models/schema";

export default function Base({ title, filters = [], model, form, data }) {
    // Hooks
    const { pathname, search } = useLocation();
    const [searchParams] = useSearchParams();
    const user = useSelector(state => state.user);
    // Constants
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const filter = useMemo(() => filters?.[searchParams.get('filter')], [searchParams]);
    const sort = useMemo(() => searchParams.get('sort'), [searchParams]);
    // State
    const [tableData, setTableData] = useState([]);
    const getTableData = useCallback(async () => await readData({ user, filter: filter?.filter || null, model, fields: form?.read?.fields.map(f => first(f.split(/(:@)/))) || [] }), [model, user, filter]);
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
                // 
                // 
                // If data is string, check for deep nesting, else populate with array
                if(isObject(data)){
                    setTableData(data)
                }
                else if (isString(data) && data[0] === '@') {
                    (async () => {
                        setTableData(await getTableData());
                    })();
                }
            }
            else {
                (async () => setTableData(await getTableData()))();
            }
        }
    }, [model, user, filter]);

    return user.appsync ? <>
        {/* Header:START */}
        <BaseBreadcrumb pathFragments={pathFragments} />
        <BaseHeader model={model} title={filter?.name || title} form={form} filters={filters} createCallback={async () => setTableData(await getTableData())} />

        <Divider />
        <BaseTable data={tableData} title={filter?.name || title} columns={form?.read?.fields || []} schema={form?.schema || {}} form={form} actions={form?.read?.actions || []} model={model} callback={async () => setTableData(await getTableData())} />
        {/* <pre>{JSON.stringify({ pathname, search, title, filters, filter, model, pathFragments, tableData }, false, 4)}</pre> */}
        {/* <pre>{JSON.stringify({ user, filter: filter?.filter || null, model, fields: form?.read?.fields || [] }, false, 4)}</pre> */}
        {/* Header:END */}
    </> : <Skeleton></Skeleton>
}