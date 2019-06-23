import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import HeaderCollection from "../layout/HeaderCollection";
import HeaderCategory from "../layout/HeaderCategory";
import HeaderBrands from "../layout/HeaderBrands";
import HeaderAuther from "../layout/HeaderAuther";
const { Content, Footer } = Layout;
class Test extends Component {
	render() {
		return (
			<Layout className="layout">
				<Content style={{ padding: "0 16px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
							background: "#fff",
							padding: 24,
							minHeight: 680,
						}}
					>
						<HeaderCollection />
						<HeaderCategory />
						<HeaderBrands />
						<HeaderAuther />
					</div>
				</Content>
				<div> asdasd</div>
				<div> asdasd</div>
				<div> asdasd</div>
				<div> asdasd</div>
				<div> asdasd</div>
				<div> as2dasd</div>
				<div> asdas3d</div>
				<div> asdasd</div>
				<div> 4asdasd</div>
				<div> asd6asd</div>
				<div> asdasd</div>
				<Footer style={{ textAlign: "center" }}>
					Create for uni project
				</Footer>
			</Layout>
		);
	}
}
export default Test;
