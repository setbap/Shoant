import React from "react";
import { Layout, Descriptions, Badge, Button } from "antd";
import ProfileDrawer from "../../layout/ProfileDrawer";

const { Content, Footer } = Layout;

const Profile = (props) => {
	return (
		<>
			<Layout>
				<ProfileDrawer activeNumber="1" />

				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<div
						style={{
							padding: 24,
							background: "#fff",
							textAlign: "center",
						}}
					>
						<Descriptions
							title="User Info"
							bordered
							column={{
								xxl: 3,
								xl: 3,
								lg: 3,
								md: 2,
								sm: 1,
								xs: 1,
							}}
						>
							<Descriptions.Item span={2} label="Email">
								ebr.sina@gmailc.com
							</Descriptions.Item>
							<Descriptions.Item span={1} label="Name">
								Cloud Database
							</Descriptions.Item>
							<Descriptions.Item span={1} label="time">
								18:00:00
							</Descriptions.Item>
							<Descriptions.Item span={1} label="Amount">
								$80.00
							</Descriptions.Item>
							<Descriptions.Item span={1} label="Discount">
								$20.00
							</Descriptions.Item>
							<Descriptions.Item label="Official">
								$60.00
							</Descriptions.Item>
							<Descriptions.Item label="Config Info">
								Data disk type: MongoDB
								<br />
								Database version: 3.4
								<br />
								Package: dds.mongo.mid
								<br />
								Storage space: 10 GB
								<br />
								Replication_factor:3
								<br />
								Region: East China 1
							</Descriptions.Item>
						</Descriptions>
						<div className="mx-auto my-3 d-flex justify-content-around">
							<Button type="dashed">Change Pass</Button>
							<Button type="dashed">Edit info</Button>
						</div>
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
