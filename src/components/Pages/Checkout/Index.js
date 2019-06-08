import React from "react";
import CheckOutForm from "./CheckOutForm";
import { Layout, Divider, Row, Col, Button, Icon } from "antd";
const { Content } = Layout;

const CardItem = () => (
	<Row className="my-3">
		<Col
			span={20}
			offset={2}
			className="bg-grey rounded py-2"
			style={{
				backgroundColor: "#f0f2f5",
			}}
		>
			<Row type="flex" justify="space-around" className=" rounded">
				<Col xs={12} md={6}>
					<img
						alt="my nadombe"
						src="https://images.unsplash.com/photo-1547491652-77d1920c5616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
						height="128px"
						width="128px"
						className="p-3 rounded-circle"
					/>{" "}
				</Col>
				<Col xs={12} md={6} className="my-auto text-center text-muted">
					<span className="text-info font-weight-bold">
						Product name
					</span>
					<br />
					<span>
						<small>p-color</small>
					</span>
					<br />
					<span>
						<small>p-size</small>
					</span>
				</Col>
				<Col xs={16} md={6} className="my-auto">
					<Button type="dashed" shape="circle" size="large">
						<Icon type="plus" />
					</Button>
					<Button shape="circle" size={"large"}>
						4
					</Button>
					<Button type="dashed" shape="circle" size="large">
						<Icon type="minus" />
					</Button>
				</Col>
				<Col xs={8} md={3} className="my-auto ">
					<Button type="dashed" shape="circle" size="large">
						<Icon type="delete" />
					</Button>
				</Col>
				<Col xs={12} md={3} className="my-auto">
					<span className="text-muted lead font-weight-bold">
						800$
					</span>
				</Col>
			</Row>
		</Col>
	</Row>
);

const CheckOut = (props) => {
	return (
		<Layout className="layout">
			<Content style={{ padding: "0 32px" }}>
				<div
					style={{
						background: "#fff",
						padding: 0,
						minHeight: 680,
					}}
				>
					<Col className="my-4 p-1 py-1">
						<Divider className="text-danger ">Cart</Divider>
						{CardItem()}
						{CardItem()}
						{CardItem()}
						{CardItem()}
						<Divider className="text-danger ">
							Shopping Detail
						</Divider>
						<div
							style={{
								background: "#fff",
								padding: 0,
								minHeight: 680,
							}}
						>
							<Row className="my-3">
								<Col
									span={20}
									offset={2}
									className="bg-grey rounded py-2"
									style={{
										backgroundColor: "#f0f2f5",
									}}
								>
									<CheckOutForm />
								</Col>
							</Row>
						</div>
					</Col>
				</div>
			</Content>
		</Layout>
	);
};

export default CheckOut;
