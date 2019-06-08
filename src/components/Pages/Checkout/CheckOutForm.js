import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class NormalLoginForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator("firsName", {
						rules: [
							{
								required: true,
								message: "Please input your firsName!",
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
							placeholder="firsName"
						/>,
					)}
				</Form.Item>

				<Form.Item>
					{getFieldDecorator("LastName", {
						rules: [
							{
								required: true,
								message: "Please input your LastName!",
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
							placeholder="LastName"
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
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true,
					})(<Checkbox>Remember me</Checkbox>)}
					<a className="login-form-forgot" href="/home">
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
					Or <a href="/home">register now!</a>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
	NormalLoginForm,
);

export default WrappedNormalLoginForm;
