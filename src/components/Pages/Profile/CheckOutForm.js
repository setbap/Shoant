import React, { useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ResModal from "../../layout/ResModal";
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	Row,
	Col,
	Popconfirm,
	message,
} from "antd";

const NormalCheckoutForm = (props) => {
	const handleSubmit = (e) => {
		if (e) e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				setvisible((vis) => !vis);
			}
		});
	};
	console.log(props);

	const buythis = (e) => {
		if (e) e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				axios
					.post(
						"https://shonode.herokuapp.com/api/shop/createOrder",
						values,
					)
					.then((res) => {
						window.location.href = "/profile/order";
					})
					.catch((err) => {
						console.log(err);

						let data = [];
						if (err.response) {
							if (err.response.data.err) {
								data = Array.of({
									msg: err.response.data.err,
									param: "data invalid",
								});
							} else {
								data = err.response.data.errors;
							}
						} else {
							data = [
								{
									msg: "no connection",
									param: "please connect",
								},
							];
						}

						ResModal({ data });
					});
			}
		});
	};
	const [visible, setvisible] = useState(false);
	function hasErrors(fieldsError) {
		return Object.keys(fieldsError).some((field) => fieldsError[field]);
	}

	const { getFieldDecorator, getFieldsError } = props.form;
	return (
		<Form onSubmit={handleSubmit} className="my-2 mx-4">
			<Row gutter={16}>
				<Col xs={24} md={12}>
					<Form.Item className="mb-1">
						{getFieldDecorator("name", {
							rules: [
								{
									required: true,
									message: "Please input your firsName!",
									min: 3,
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
				</Col>
				<Col xs={24} md={12}>
					<Form.Item>
						{getFieldDecorator("lastname", {
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
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={24} md={12}>
					<Form.Item className="mb-1">
						{getFieldDecorator("state", {
							rules: [
								{
									required: true,
									min: 2,
									message:
										"Please input your state! and min is 2",
								},
							],
						})(
							<Input
								prefix={
									<Icon
										type="environment"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								type="text"
								placeholder="state"
							/>,
						)}
					</Form.Item>
				</Col>
				<Col xs={24} md={12} className="pb-0">
					<Form.Item className="mb-1">
						{getFieldDecorator("city", {
							rules: [
								{
									required: true,
									message:
										"Please input your city! and min is 3",
									min: 3,
									max: 32,
								},
							],
						})(
							<Input
								prefix={
									<Icon
										type="environment"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								placeholder="city"
							/>,
						)}
					</Form.Item>
				</Col>

				<Col span={24}>
					<Form.Item>
						{getFieldDecorator("address", {
							rules: [
								{
									required: true,
									message:
										"Please input your Addres! and min is 3",
									min: 3,
									max: 32,
								},
							],
						})(
							<Input
								prefix={
									<Icon
										type="compass"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								placeholder="Addres"
							/>,
						)}
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={32}>
				<Col xs={24} md={12}>
					<Form.Item className="mb-1">
						{getFieldDecorator("remember", {
							valuePropName: "checked",
							initialValue: true,
						})(
							<Checkbox>
								Accept all condition and{" "}
								<strong>price:{props.price}</strong>
							</Checkbox>,
						)}
					</Form.Item>
				</Col>
				<Col md={12} xs={24}>
					<Popconfirm
						title="are you realy want to purchase this ....???"
						visible={visible}
						onVisibleChange={() => {
							setvisible((vis) => !vis);
						}}
						onConfirm={(e) => {
							message.success("you bue  that coool");
							setvisible(false);

							buythis(e);
						}}
						onCancel={() => {
							setvisible(false);
							message.error("whaaat");
						}}
						okText="Yes"
						cancelText="No"
					/>
					<Button
						type="primary"
						onClick={(e) => {
							// setvisible((vis) => !vis);
							handleSubmit(e);
						}}
						disabled={hasErrors(getFieldsError())}
						block
						htmlType="button"
					>
						Purchase
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const WrappedNormalCheckoutForm = Form.create({ name: "normal_Checkout" })(
	NormalCheckoutForm,
);

export default WrappedNormalCheckoutForm;
