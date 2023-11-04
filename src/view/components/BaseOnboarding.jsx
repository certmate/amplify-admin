import { Col, Layout, Row, Space, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import MenuFooter from "../../layout/components/footer";
import BaseForm from "./BaseForm";
import { useEffect, useMemo, useState } from "react";
import { routes } from "../../settings";
import { getData } from "../../common";

export default function BaseOnboarding() {
    const user = useSelector(state => state.user);
    const form = useMemo(() => routes['/account'].form, []);
    const [values, setValues] = useState(null);

    useEffect(() => {
        user?.appsync && (async () => {
            setValues({ ...user.appsync, ...await getData({ model: 'User', fields: form.create.fields, id: user.appsync.id }) })
        })();
    }, [user]);

    return <Spin spinning={!user.appsync}>
        <Layout className="hp-app-layout hp-bg-color-dark-90">
            <Content className="hp-content-main" style={{ minHeight: "calc(100vh - 30px)", margin: 16 }}>
                <h1 className="hp-mb-0">Welcome to Certmate</h1>
                <p className="hp-mb-32">Complete your profile to get started</p>
                {user.appsync && <BaseForm model='User' validateOnChange={true} schema={form.schema} fields={form.create.fields} values={values} form={form} onSubmit={async () => {
                    window.location.href = '/';
                }} />}
            </Content>
            <MenuFooter />
        </Layout>
    </Spin>
}