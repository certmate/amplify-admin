import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Alert, Checkbox } from "antd";
import LeftContent from "./leftContent";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { Auth } from 'aws-amplify';
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthState } from "@aws-amplify/ui-components";
import { toLower } from "lodash";
import SweetAlert from 'sweetalert2';

export default function SignUp({ change }) {
	const [loginError, setLoginError] = useState(null);

	// const signUp = 

	return <>
		<h1 className="hp-mb-sm-0">Sign Up</h1>
		<p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
			Please create an account to get started.
		</p>

		<Formik
			initialValues={{ username: '', password: '', passwordConfirm: '', terms: false }}
			validationSchema={Yup.object().shape({
				username: Yup.string().email().required().min(3),
				password: Yup.string().required().min(3),
				passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
				terms: Yup.boolean().oneOf([true], 'Please accept our terms & conditions of service'),
			})}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={async ({ username, password }, { setSubmitting }) => {
				try {
					const { user } = await Auth.signUp({
						username: toLower(username),
						password
					});
					
					change(AuthState.ConfirmSignUp);
				} catch (error) {
					await SweetAlert.fire({ title: 'Registration Failed!', text: error.message === 'An account with the given email already exists.' ? "This user already exists. If this is your account, you can reset your password from the login form. If this is not your account, please try registering with a different email." : "", icon: 'error' });
				}
			}}
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
					<Form.Item label="Username" className="hp-mb-16" validateStatus={errors?.username ? 'error' : ''} help={errors?.username}>
						<Input onChange={handleChange('username')} onBlur={handleBlur('username')} />
					</Form.Item>

					<Form.Item label="Password" className="hp-mb-8" validateStatus={errors?.password ? 'error' : ''} help={errors?.password}>
						<Input.Password onChange={handleChange('password')} onBlur={handleBlur('password')} />
					</Form.Item>

					<Form.Item label="Confirm Password" className="hp-mb-8" validateStatus={errors?.passwordConfirm ? 'error' : ''} help={errors?.passwordConfirm}>
						<Input.Password onChange={handleChange('passwordConfirm')} onBlur={handleBlur('passwordConfirm')} />
					</Form.Item>

					<Form.Item className="hp-mb-8">
						<Checkbox onChange={handleChange('terms')}>Accept Terms <a href="https://certmate.com.au/terms-and-conditions/" target="_blank" rel="noreferrer" className="text-primary" data-cy="tclink">Terms & Conditions</a> and <a href="https://certmate.com.au/privacy-policy/" target="_blank" rel="noreferrer" className="text-primary" data-cy="pplink">Privacy Policy</a></Checkbox>
						{errors?.terms && <p className="ant-form-item-explain-error">{errors?.terms}</p>}
					</Form.Item>

					<Form.Item className="hp-mt-16 hp-mb-8">
						<Button block loading={isSubmitting} type="primary" htmlType="submit" onClick={handleSubmit}>
							Sign Up
						</Button>
					</Form.Item>
				</Form>
			)}
		</Formik>

		<Col className="hp-form-info hp-text-center">
			<span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-16">
				Already have an account?
			</span>
			&nbsp;&nbsp;
			<span
				className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption hp-cursor-pointer"
				onClick={() => change(AuthState.SignIn)}
			>
				Login
			</span>
		</Col>
		{loginError && <Alert
			className="hp-mt-16"
			message="Login Failed"
			description={loginError}
			type="error"
		/>}
	</>;
};