import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Divider } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import BaseBreadcrumb from "../components/BaseBreadcrumb";
import BaseHeader from "../components/BaseHeader";
import BaseTable from "../components/BaseTable";
import { useSelector } from "react-redux";
import { readData } from "../../common";

export default function Base({ title, filters = [], model, form, route, data }) {
    const { id } = useParams();
    const { pathname, search, hash } = useLocation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [tableData, setTableData] = useState([]);
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const filter = useMemo(() => filters?.[searchParams.get('filter')], [searchParams]);
    const sort = useMemo(() => searchParams.get('sort'), [searchParams]);
    const getTableData = useCallback(async () => await readData({ user, filter: filter?.filter || null, model, fields: form?.read?.fields || [] }), [model, user]);
    /**
     * Path fragments
     */
    useEffect(() => {
        user.appsync && (
            data ? setTableData(data) : (async () => setTableData(await getTableData()))()
        );
    }, [model, user]);

    return <>
        {/* Header:START */}
        <BaseBreadcrumb pathFragments={pathFragments} />
        <BaseHeader model={model} title={filter?.name || title} form={form} filters={filters} createCallback={async () => setTableData(await getTableData())} />

        <Divider />
        <BaseTable data={tableData} columns={form?.read?.fields || []} schema={form?.schema || {}} actions={form?.read?.actions || []} model={model} />
        <pre>{JSON.stringify({ id, pathname, search, route, title, hash, filters, filter, model, pathFragments, tableData }, false, 4)}</pre>
        {/* Header:END */}
    </>
}