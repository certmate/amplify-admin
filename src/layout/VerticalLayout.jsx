import React, { useState } from "react";

import { Layout, Row, Col, Spin } from "antd";

import Sidebar from "./components/menu/Sidebar";
import MenuHeader from "./components/header";
import MenuFooter from "./components/footer";
import { useSelector } from "react-redux";
import { userHasOnboared } from "../common";
import BaseOnboarding from "../view/components/BaseOnboarding";
import { App as CapApp } from '@capacitor/app';
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

export default function VerticalLayout({ children }) {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    
    CapApp.addListener('appUrlOpen', ({ url }) => {
		console.log('App opened with URL:', url);
		navigate(url.replace('certmate:/', ''));
	});

    return (
        <Spin spinning={!user?.appsync}>
            {userHasOnboared(user.appsync) ? <Layout className="hp-app-layout">
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
            </Layout> : <BaseOnboarding />}
        </Spin>
    );
};