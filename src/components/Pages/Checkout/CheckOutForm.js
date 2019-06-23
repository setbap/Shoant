import React, { useState } from "react";
import "antd/dist/antd.css";
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

const NormalLoginForm = (props) => {
	const handleSubmit = (e) => {
		if (e) e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};
	const [visible, setvisible] = useState(false);

	const { getFieldDecorator } = props.form;
	return (
		<Form onSubmit={handleSubmit} className="my-2 mx-4">
			<Row gutter={16}>
				<Col xs={24} md={12}>
					<Form.Item className="mb-1">
						{getFieldDecorator("firsName", {
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
						{getFieldDecorator("Addres", {
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
						})(<Checkbox>Accept all condition and price</Checkbox>)}
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

							handleSubmit();
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
						onClick={() => {
							setvisible((vis) => !vis);
						}}
						block
						htmlType="button"
					>
						Purchase
					</Button>
					{/* <Button type="primary" block htmlType="submit">
						Purchase
					</Button> */}
				</Col>
			</Row>
		</Form>
	);
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
	NormalLoginForm,
);

export default WrappedNormalLoginForm;
