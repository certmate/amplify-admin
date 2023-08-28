import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Input, Table, Popconfirm, message, Space, Divider, Select, Modal, Upload } from "antd";
import { AddCircle, SearchNormal, SearchNormal1 } from "iconsax-react";
import { entries, isEmpty, startCase, uniqueId } from "lodash";
import { useEffect, useMemo, useState } from "react";
import graphqlSchema from "../../graphql/schema";
import { Formik } from "formik";
import { object } from "yup";
import { Checkbox, Form } from 'antd';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { cleanNull } from "../../helpers";

export default function BaseTable({ data, columns, schema }) {

    return <pre>{ JSON.stringify({ data, columns, schema }, false ,4) }</pre>
    // return <Table dataSource={[
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ]} columns={[
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ]} />
}
