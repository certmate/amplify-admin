import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Alert } from "antd";
import LeftContent from "./leftContent";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { Auth } from 'aws-amplify';
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthState } from "@aws-amplify/ui-components";
import Login from "./Login";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";

export default function Authenticator({ loggedIn }) {
    const [view, setView] = useState(AuthState.SignIn);

    return <Row gutter={[32, 0]} className="hp-authentication-page">
        <LeftContent />

        <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
            <Row className="hp-h-100" align="middle" justify="center">
                <Col
                    xxl={11}
                    xl={15}
                    lg={20}
                    md={20}
                    sm={24}
                    className="hp-px-sm-8 hp-pt-24 hp-pb-48"
                >
                    {
                        view === AuthState.SignIn ? <Login change={view => setView(view)} loggedIn={loggedIn} />
                        : view === AuthState.SignUp ? <SignUp change={view => setView(view)} />
                        : view === AuthState.ConfirmSignUp ? <ConfirmSignUp change={view => setView(view)} />
                        : null
                    }
                    <Footer />
                </Col>
            </Row>
        </Col>
    </Row>
}