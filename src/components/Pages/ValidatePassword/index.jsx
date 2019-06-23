import { Form, Icon, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import MyModal from "../../layout/ResModal";
//

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { new_pass, clearerr } from "../../../actions/authActions";
import { Link } from "react-router-dom";

const ChnagePassword = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.clearerr();
				props.new_pass(values, props.history);
			}
		});
	};

	useEffect(() => {
		if (props.err && props.err.length) {
			message.error("new props");
			console.log(props.err);
			MyModal({ data: props.err });
			props.clearerr();
		}
		return () => {};
	}, [props, props.err]);

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
				{getFieldDecorator("token", {
					rules: [
						{
							required: true,
							message: "Please input your token!",
						},
					],
				})(
					<Input
						// prefix={
						// <Icon
						// 	type="user"
						// 	style={{ color: "rgba(0,0,0,.25)" }}
						// />
						// }
						placeholder="token"
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
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Change password
				</Button>
				<br />
			</Form.Item>
		</Form>
	);
};

ChnagePassword.propTypes = {
	new_pass: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const index = Form.create({ name: "singUpForm" })(
	connect(
		mapStateToProps,
		{ new_pass, clearerr },
	)(ChnagePassword),
);

export default index;
