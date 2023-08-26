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

export default function ResetPassword({ change }) {

	return <>
		<h1 className="hp-mb-sm-0">Password Reset</h1>
		<p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
			Check your email
		</p>

		<Formik
			initialValues={{ username: '', password: '', passwordConfirm: '', terms: false, code: '' }}
			validationSchema={Yup.object().shape({
				username: Yup.string().email().required().min(3),
				code: Yup.string().required().min(3),
				password: Yup.string().required().min(3),
				passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
			})}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={async ({ username, code, password }, { setSubmitting }) => {
				try {
					await Auth.forgotPasswordSubmit({
						username: toLower(username),
						code,
						password
					});
					
					change('ForgotPasswordCode');
				} catch (error) {
					console.log(error);
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
					<Form.Item label="Code" className="hp-mb-8" validateStatus={errors?.code ? 'error' : ''} help={errors?.code}>
						<Input.Password onChange={handleChange('code')} onBlur={handleBlur('code')} />
					</Form.Item>

					<Form.Item label="Username" className="hp-mb-16" validateStatus={errors?.username ? 'error' : ''} help={errors?.username}>
						<Input onChange={handleChange('username')} onBlur={handleBlur('username')} />
					</Form.Item>

					<Form.Item label="Password" className="hp-mb-8" validateStatus={errors?.password ? 'error' : ''} help={errors?.password}>
						<Input.Password onChange={handleChange('password')} onBlur={handleBlur('password')} />
					</Form.Item>

					<Form.Item label="Confirm Password" className="hp-mb-8" validateStatus={errors?.passwordConfirm ? 'error' : ''} help={errors?.passwordConfirm}>
						<Input.Password onChange={handleChange('passwordConfirm')} onBlur={handleBlur('passwordConfirm')} />
					</Form.Item>
					
					<Form.Item className="hp-mt-16 hp-mb-8">
						<Button block loading={isSubmitting} type="primary" htmlType="submit" onClick={handleSubmit}>
							Send email
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
	</>;
};