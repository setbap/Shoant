import { Form, Icon, Input, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import MyModal from "../../layout/ResModal";
//

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reguser } from "../../../actions/authActions";
import { withRouter, Link } from "react-router-dom";

const SignupForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.reguser(values, props.history);
			}
		});
	};

	useEffect(() => {
		if (props.err && props.err.length) {
			message.error("new props");
			console.log(props.err);
			MyModal({ data: props.err });
		}
		return () => {};
	}, [props.err]);

	const { getFieldDecorator } = props.form;
	return (
		<Form
			onSubmit={handleSubmit}
			className="singup-form"
			style={{
				marginRight: "auto",
				marginLeft: "auto",
				maxWidth: "350px",
			}}
		>
			<Form.Item>
				{getFieldDecorator("name", {
					rules: [
						{
							required: true,
							message: "Please input your name!",
						},
					],
				})(
					<Input
						prefix={
							<Icon
								type="user"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						placeholder="Username"
					/>,
				)}
			</Form.Item>
			<Form.Item>
				{getFieldDecorator("email", {
					rules: [
						{
							required: true,
							message: "Please input your email!",
						},
					],
				})(
					<Input
						prefix={
							<Icon
								type="user"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						placeholder="email"
					/>,
				)}
			</Form.Item>
			<Form.Item>
				{getFieldDecorator("password", {
					rules: [
						{
							required: true,
							message: "Please input your Password!",
						},
					],
				})(
					<Input
						prefix={
							<Icon
								type="lock"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						type="password"
						placeholder="Password"
					/>,
				)}
			</Form.Item>
			<Form.Item>
				{getFieldDecorator("passwordconfrim", {
					rules: [
						{
							required: true,
							message: "Please input your passwordconfrim!",
						},
					],
				})(
					<Input
						prefix={
							<Icon
								type="lock"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						type="password"
						placeholder="passwordconfrim"
					/>,
				)}
			</Form.Item>
			<Form.Item>
				have account{"  "}
				<Link className="login-form-forgot" to="/login">
					login
				</Link>
				<br />
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					signup
				</Button>
				<br />
				you have validate code{" "}
				<Link to="/validate-email">register now!</Link>
			</Form.Item>
		</Form>
	);
};

SignupForm.propTypes = {
	reguser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const index = Form.create({ name: "singUpForm" })(
	connect(
		mapStateToProps,
		{ reguser },
	)(SignupForm),
);

export default index;
