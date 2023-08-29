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
import { RoleRouteFilter, cleanNull } from "../../helpers";
import { useSelector } from "react-redux";

export default function BaseTable({ data, columns, schema }) {
    const user = useSelector(state => state.user);

    return <>
        <Table dataSource={data || []} columns={
            columns.map(c => schema[c]).filter(Boolean).filter(({ roles, routes }) => RoleRouteFilter(roles, [], user, null))
            .map(({ label }) => ({
                title: startCase(label),
                key: label,
                render: d => d
            }))
        } />
    </>
}
