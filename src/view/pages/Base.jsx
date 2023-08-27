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

    return <>
        {/* Header:START */}
        {route === last(pathFragments) ? (
            <>
                <BaseBreadcrumb pathFragments={pathFragments} />
                <BaseHeader model={model} title={title} form={form} filters={filters} />
                
                <pre>{JSON.stringify({ id, pathname, search, route, title, hash, filters, filter, model, pathFragments }, false, 4)}</pre>
                <Divider />
                <Table dataSource={[
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]} columns={[
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]} />;
            </>
        ) : <></>}
        {/* Header:END */}
        {/* Child */}
        <Outlet context={{ filter, sort }} ></Outlet>
        
    </>
}