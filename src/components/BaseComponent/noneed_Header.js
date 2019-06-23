import React from "react";
import { Layout, Menu, Icon, Popover } from "antd";
import { Select } from "antd";
const { Header } = Layout;
const { SubMenu } = Menu;

const { Option, OptGroup } = Select;

const Index = (props) => {
	const content = (
		<Menu mode="inline">
			<SubMenu
				key="sub1"
				title={
					<span>
						<Icon type="mail" />
						<span>Navigation One</span>
					</span>
				}
			>
				<Menu.Item key="1">Option 1</Menu.Item>
				<Menu.Item key="2">Option 2</Menu.Item>
				<Menu.Item key="3">Option 3</Menu.Item>
				<Menu.Item key="4">Option 4</Menu.Item>
			</SubMenu>
			<SubMenu
				key="sub2"
				title={
					<span>
						<Icon type="appstore" />
						<span>Navigation Two</span>
					</span>
				}
			>
				<Menu.Item key="5">Option 5</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item>
				<SubMenu key="sub3" title="Submenu">
					<Menu.Item key="7">Option 7</Menu.Item>
					<Menu.Item key="8">Option 8</Menu.Item>
				</SubMenu>
			</SubMenu>
		</Menu>
	);
	return (
		<Header>
			<div
				className=" float-left text-light"
				style={{ fontSize: "1.4rem" }}
			>
				Shonode
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["2"]}
				style={{ lineHeight: "64px" }}
			>
				<Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>

				<Menu.Item key="3">
					<Popover
						overlayClassName="popover-menu"
						placement="bottomRight"
						content={content}
						trigger="click"
						arrowPointAtCenter
					>
						nav 3
					</Popover>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Index;
