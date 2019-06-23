import { Form, Icon, Input, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import MyModal from "../../layout/ResModal";
//

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { validate_email, clearerr } from "../../../actions/authActions";
import { withRouter, Link } from "react-router-dom";

const ValidateUser = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.clearerr();
				props.validate_email(values, props.history);
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
				{getFieldDecorator("userId", {
					rules: [
						{
							required: true,
							message: "Please input your id!",
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
						placeholder="user id"
					/>,
				)}
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					validate
				</Button>
			</Form.Item>
		</Form>
	);
};

ValidateUser.propTypes = {
	validate_email: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const index = Form.create({ name: "ValidateUser" })(
	connect(
		mapStateToProps,
		{ validate_email, clearerr },
	)(ValidateUser),
);

export default index;
