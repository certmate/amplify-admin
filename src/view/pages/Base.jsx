import { Outlet, useLocation, useMatch, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Space, Divider, Modal, Card, Breadcrumb, Table } from "antd";
import { AddCircle } from "iconsax-react";
import { isEmpty, last, lowerCase, startCase } from "lodash";
import Filters from "../components/Filters";
import { useEffect, useMemo, useState } from "react";
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

    /**
     * Path fragments
     */
    useEffect(() => {
        user.appsync && (
            data ? setTableData(data) : (async () => {
                const plural = lowerCase(schema.models[model].pluralName);
                try {
                    const { data } = await API.graphql(graphqlOperation(`
                        query GetBase{
                            getBase(id: "${user.appsync.base}"){
                                ${plural}(
                                    filter: ${JSON.parse(filter)}
                                ){
                                    items{
                                        ${form?.read.join(`\n`)}
                                    }
                                }
                            }
                        }
                    `));
    
                    setTableData(data.getBase[plural].items);
                }
                catch (e) {
                    console.log(e);
                    setTableData([]);
                }
            })()
        );
    }, [model, user]);

    return <>
        {/* Header:START */}
        <BaseBreadcrumb pathFragments={pathFragments} />
        <BaseHeader model={model} title={title} form={form} filters={filters} />

        <Divider />
        <BaseTable data={tableData} columns={form?.read} schema={form?.schema} />
        <pre>{JSON.stringify({ id, pathname, search, route, title, hash, filters, filter, model, pathFragments, tableData }, false, 4)}</pre>
        {/* Header:END */}
    </>
}