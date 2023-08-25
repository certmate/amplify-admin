import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Alert } from "antd";
import LeftContent from "../leftContent";
import Footer from "../footer";
import { useDispatch } from "react-redux";
import { Auth } from 'aws-amplify';
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login({ loggedIn }) {
	const [loginError, setLoginError] = useState(null);

	const signIn = async function (data) {
		try {
			loggedIn(await Auth.signIn(data.username, data.password));
		} catch (error) {
			setLoginError(error.message === 'User is not confirmed.' ? "Your account is currently inactive. If you want to activate your account, please contact us via the 'contact us' link below." : 'Incorrect username or password. If you have forgotten your password, click on the Forgot Password link.');
		}
	}

	return (
		<Row gutter={[32, 0]} className="hp-authentication-page">
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
						<h1 className="hp-mb-sm-0">Login</h1>
						<p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
							Welcome back, please login to your account.
						</p>

						<Formik
							initialValues={{ username: '', password: '' }}
							validationSchema={Yup.object().shape({
								username: Yup.string().required().min(3),
								password: Yup.string().required().min(3)
							})}
							validateOnChange={false}
							validateOnBlur={false}
							onSubmit={(values, { setSubmitting }) => signIn(values)}
						>
							{({
								values,
								errors,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								setFieldValue
							}) => (
								<Form
									onSubmitCapture={handleSubmit}
									data-cy="signin-form"
									layout="vertical"
									name="basic"
									className="hp-mt-sm-16 hp-mt-32"
								>
									<Form.Item label="Username" className="hp-mb-16">
										<Input onChange={handleChange('username')} onBlur={handleBlur('username')} />
									</Form.Item>

									<Form.Item label="Password" className="hp-mb-8">
										<Input.Password onChange={handleChange('password')} onBlur={handleBlur('password')} />
									</Form.Item>

									<Row align="middle" justify="space-between">
										<Form.Item className="hp-mb-0">

										</Form.Item>

										<Link
											className="hp-button hp-text-color-black-80 hp-text-color-dark-40"
											to="/pages/authentication/recover-password"
										>
											Forgot Password?
										</Link>
									</Row>

									<Form.Item className="hp-mt-16 hp-mb-8">
										<Button block loading={isSubmitting} type="primary" htmlType="submit" onClick={handleSubmit}>
											Sign in
										</Button>
									</Form.Item>
								</Form>
							)}
						</Formik>

						<Col className="hp-form-info hp-text-center hide">
							<span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-16">
								Don’t you have an account?
							</span>
							&nbsp;&nbsp;
							<Link
								className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
								to="/pages/authentication/register"
							>
								Create an account
							</Link>
						</Col>
						{loginError && <Alert
							className="hp-mt-16"
							message="Login Failed"
							description={loginError}
							type="error"
						/>}
						<Footer />
					</Col>
				</Row>

			</Col>
		</Row>
	);
};