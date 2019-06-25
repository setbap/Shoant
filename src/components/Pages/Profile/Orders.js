import React, { useEffect, useState } from "react";
import ProfileDrawer from "../../layout/ProfileDrawer";
import "antd/dist/antd.css";
import { Layout, Row, Col, Button, Icon } from "antd";
import axios from "axios";
import { List, Typography } from "antd";
import { saveAs } from "file-saver";
const { Content, Footer } = Layout;

const Profile = (props) => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/shop/getOrders")
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				// setMyCart(res.data.products);

				console.log(res.data);
				setOrders(res.data);
			})
			.catch((err) => {
				console.log("cart");
			});
	}, []);

	const downloadOrder = (fid) => {
		// axios
		// 	.post("http://localhost:5000/api/shop/getFactore", { fid: fid })
		// 	.then((res) => {
		// 		// let myopt = res.data.brands.map((item) => {
		// 		// 	return { value: item._id, label: item.name };
		// 		// });
		// 		// setBrands(myopt);
		// 		// setMyCart(res.data.products);
		// 		console.log("down");

		// 		// console.log(res.data);
		// 		// setOrders(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log("err in factore");
		// 	});
		axios
			.post(
				"http://localhost:5000/api/shop/getFactore",
				{ fid: fid },
				{
					responseType: "blob",
				},
			)
			.then((res) => {
				const pdfBlob = new Blob([res.data], {
					type: "application/pdf",
				});
				saveAs(pdfBlob, "generatedDocument.pdf");
			});
	};

	const MyOrder = orders.map((order) => (
		<List
			key={order._id}
			className="my-4"
			header={
				<div className="text-info">
					{` this order sended to ${order.name}  ${
						order.lastname
					} and  ${order.deliver ? "delivered" : "not delivered"}`}
					<Button onClick={() => downloadOrder(order._id)}>
						dwonload id
					</Button>
				</div>
			}
			footer={
				<div className="text-info">{`send to city ${
					order.city
				} , state ${order.state} and address   ${order.address}`}</div>
			}
			bordered
			dataSource={order.items}
			renderItem={(item) => (
				<List.Item>
					name:{item.product.title}-price:{item.product.price} - size:
					{item.product.size}- color:{item.product.color}- material:
					{item.product.material}- quantity:{item.quantity}
				</List.Item>
			)}
		/>
	));

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
						<h3 className="text-primary">your orders</h3>
						{MyOrder}
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
