import { Outlet, useLocation, useMatch, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Space, Divider, Modal, Card, Breadcrumb, Table } from "antd";
import { AddCircle } from "iconsax-react";
import { isEmpty, last, startCase } from "lodash";
import Filters from "../components/Filters";
import { useMemo, useState } from "react";
import BaseForm from "../components/BaseForm";
import * as mutations from "../../graphql/mutations";
import SweetAlert from 'sweetalert2';
import { API, graphqlOperation } from 'aws-amplify';
import BaseBreadcrumb from "../components/BaseBreadcrumb";
import BaseHeader from "../components/BaseHeader";
import BaseTable from "../components/BaseTable";
import * as queries from "../../graphql/queries";
import { anchorModel } from "../../settings";

export default function Base({ title, filters = [], model, form, route }) {
    const { id } = useParams();
    const { pathname, search, hash } = useLocation();
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const sort = searchParams.get('sort');
    const navigate = useNavigate();
    /**
     * Path fragments
     */
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const tableData = useMemo(async () => {
        // try {
        //     await API.graphql(graphqlOperation(`
        //         query GetBase{
        //             base: getBase()
        //         }
        //     `, { input }));
        //     setShowModal(false);
        //     await SweetAlert.fire({ title: 'Success', text: `${model} Created!`, icon: 'success' });
        // }
        // catch (e) {
        //     console.log(e);
        // }
    }, [model]);

    return <>
        {/* Header:START */}
        <BaseBreadcrumb pathFragments={pathFragments} />
        <BaseHeader model={model} title={title} form={form} filters={filters} />

        <pre>{JSON.stringify({ id, pathname, search, route, title, hash, filters, filter, model, pathFragments }, false, 4)}</pre>
        <Divider />
        <BaseTable data={tableData || []} columns={form?.read} schema={form?.schema} />
        {/* Header:END */}
    </>
}