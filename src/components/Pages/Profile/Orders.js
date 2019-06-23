import React from "react";
import ProfileDrawer from "../../layout/ProfileDrawer";
import "antd/dist/antd.css";
import { Layout, Row, Col, Button, Icon } from "antd";

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
					<small className="text-info font-weight-bold">
						#12341234rewq
					</small>
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

const { Content, Footer } = Layout;

const Profile = (props) => {
	return (
		<>
			<Layout>
				<ProfileDrawer activeNumber="2" />

				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<div
						style={{
							padding: 24,
							background: "#fff",
							textAlign: "center",
						}}
					>
						{CardItem()}
						{CardItem()}
						{CardItem()}
						{CardItem()}
					</div>
				</Content>
			</Layout>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</>
	);
};

export default Profile;
