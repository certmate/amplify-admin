import React, { useState } from "react";

import { Layout, Row, Col } from "antd";

import Sidebar from "./components/menu/Sidebar";
import MenuHeader from "./components/header";
import MenuFooter from "./components/footer";

const { Content } = Layout;

export default function VerticalLayout(props) {
    const { children } = props;

    const [visible, setVisible] = useState(false);

    return (
        <Layout className="hp-app-layout">
            <Sidebar visible={visible} setVisible={setVisible} />

            <Layout className="hp-bg-black-20 hp-bg-color-dark-90">
                <MenuHeader setVisible={setVisible} />

                <Content className="hp-content-main">
                    <Row justify="center">
                        <Col xxl={17} xl={22} span={24}>
                            {children}
                        </Col>
                    </Row>
                </Content>

                <MenuFooter />
            </Layout>

        </Layout>
    );
};