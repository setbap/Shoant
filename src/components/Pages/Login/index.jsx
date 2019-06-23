import { Form, Icon, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import MyModal from "../../layout/ResModal";
//

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginuser, clearerr } from "../../../actions/authActions";
import { Link } from "react-router-dom";

const Login = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.clearerr();
				props.loginuser(values, props.history);
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
					Log in
				</Button>
				<br />
				forget password <Link to="/forget-password">register now!</Link>
			</Form.Item>
		</Form>
	);
};

Login.propTypes = {
	loginuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const index = Form.create({ name: "singUpForm" })(
	connect(
		mapStateToProps,
		{ loginuser, clearerr },
	)(Login),
);

export default index;
