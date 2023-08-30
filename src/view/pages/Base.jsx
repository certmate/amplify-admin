import { Outlet, useLocation, useMatch, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Space, Divider, Modal, Card, Breadcrumb, Table } from "antd";
import { AddCircle } from "iconsax-react";
import { isEmpty, last, lowerCase, startCase } from "lodash";
import Filters from "../components/Filters";
import { useCallback, useEffect, useMemo, useState } from "react";
import BaseForm from "../components/BaseForm";
import * as mutations from "../../graphql/mutations";
import SweetAlert from 'sweetalert2';
import { API, graphqlOperation } from 'aws-amplify';
import BaseBreadcrumb from "../components/BaseBreadcrumb";
import BaseHeader from "../components/BaseHeader";
import BaseTable from "../components/BaseTable";
import * as queries from "../../graphql/queries";
import { useSelector } from "react-redux";
import { schema } from "../../models/schema";
import { readData } from "../../common";

export default function Base({ title, filters = [], model, form, route, data }) {
    const { id } = useParams();
    const { pathname, search, hash } = useLocation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [tableData, setTableData] = useState([]);
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const filter = useMemo(() => searchParams.get('filter'), [searchParams]);
    const sort = useMemo(() => searchParams.get('sort'), [searchParams]);
    const getTableData = useCallback(async () => await readData({ user, filter, model, fields: form?.read?.fields || [] }), [model, user]);
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
        <BaseHeader model={model} title={title} form={form} filters={filters} createCallback={async () => setTableData(await getTableData())} />

        <Divider />
        <BaseTable data={tableData} columns={form?.read?.fields || []} schema={form?.schema || {}} actions={form?.read?.actions || []} model={model} />
        {/* <pre>{JSON.stringify({ id, pathname, search, route, title, hash, filters, filter, model, pathFragments, tableData }, false, 4)}</pre> */}
        {/* Header:END */}
    </>
}