import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Affix, Icon } from "antd";

const { Sider } = Layout;

const ProfileDrawer = ({ activeNumber }) => {
	return (
		<div>
			<Affix offsetTop={0}>
				<Sider
					style={{
						// top: "88px",
						minHeight: "100vh",
					}}
					breakpoint="md"
					collapsedWidth="0"
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={[`${activeNumber}`]}
					>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>
								<Link
									className="text-muted"
									to="/profile/info"
									className="nav-text"
								>
									Info
								</Link>
							</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>
								<Link
									className="text-muted"
									to="/profile/order"
									className="nav-text"
								>
									Order
								</Link>
							</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>
								<Link
									className="text-muted"
									to="/profile/like"
									className="nav-text"
								>
									Like
								</Link>
							</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>
								<Link
									className="text-muted"
									to="/profile/cart"
									className="nav-text"
								>
									Cart
								</Link>
							</span>
						</Menu.Item>
					</Menu>
				</Sider>
			</Affix>
		</div>
	);
};

export default ProfileDrawer;
