import { Form, Icon, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import MyModal from "../../layout/ResModal";
//

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forget_pass, clearerr } from "../../../actions/authActions";
import { Link } from "react-router-dom";

const Login = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.clearerr();
				props.forget_pass(values, props.history);
			}
		});
	};

	useEffect(() => {
		if (props.err && props.err.length) {
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
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					validate email
				</Button>
				<br />
			</Form.Item>
		</Form>
	);
};

Login.propTypes = {
	forget_pass: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const index = Form.create({ name: "singUpForm" })(
	connect(
		mapStateToProps,
		{ forget_pass, clearerr },
	)(Login),
);

export default index;
