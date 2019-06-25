import React, { useEffect, useState } from "react";
import ProfileDrawer from "../../layout/ProfileDrawer";
import CheckoutForm from "./CheckOutForm";
import { Layout, Row, Col, Button, Icon } from "antd";
import axios from "axios";

const { Content, Footer } = Layout;

const Profile = (props) => {
	const [MyCart, setMyCart] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/shop/getMyCart")
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setMyCart(res.data.products);

				console.log(res.data.products);
			})
			.catch((err) => {
				console.log("cart");
			});
	}, []);
	const incItem = (pid) => {
		axios
			.post("http://localhost:5000/api/shop/incCartItem", { prodId: pid })
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setMyCart(res.data.products);
			})
			.catch((err) => {
				console.log("cart");
			});
	};
	const calcTotalPrice = (data) => {
		let sum = 0;
		MyCart.forEach((item) => {
			sum += item.quantity * +item.productId.price;
		});
		return sum;
	};

	const decItem = (pid) => {
		axios
			.post("http://localhost:5000/api/shop/decCartItem", { prodId: pid })
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setMyCart(res.data.products);
			})
			.catch((err) => {
				console.log("cart");
			});
	};

	const delItem = (pid) => {
		axios
			.post("http://localhost:5000/api/shop/deleteCartItem", {
				prodId: pid,
			})
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setMyCart(res.data.products);
			})
			.catch((err) => {
				console.log("cart");
			});
	};

	const items = MyCart.map((val, index) => (
		<Row key={index} className="my-3">
			<Col
				span={20}
				offset={2}
				className="bg-grey rounded py-2"
				style={{
					backgroundColor: "#f0f2f5",
				}}
			>
				<Row
					type="flex"
					key={val.productId._id}
					justify="space-around"
					className=" rounded"
				>
					<Col xs={12} md={6}>
						<img
							alt="my nadombe"
							src={val.productId.imageUrl}
							height="128px"
							width="128px"
							className="p-3 rounded-circle"
						/>{" "}
					</Col>
					<Col
						xs={12}
						md={6}
						className="my-auto text-center text-muted"
					>
						<small className="text-info font-weight-bold">
							{val.productId._id}
						</small>
						<br />
						<span>
							<small>{val.productId.color}</small>
						</span>
						<br />
						<span>
							<small>{val.productId.size}</small>
						</span>
					</Col>
					<Col xs={16} md={6} className="my-auto">
						<Button
							type="dashed"
							onClick={() => incItem(val.productId._id)}
							shape="circle"
							size="large"
						>
							<Icon type="plus" />
						</Button>
						<Button shape="circle" size={"large"}>
							{val.quantity}
						</Button>
						<Button
							type="dashed"
							onClick={() => decItem(val.productId._id)}
							shape="circle"
							size="large"
						>
							<Icon type="minus" />
						</Button>
					</Col>
					<Col
						xs={8}
						md={3}
						onClick={() => delItem(val.productId._id)}
						className="my-auto "
					>
						<Button type="dashed" shape="circle" size="large">
							<Icon type="delete" />
						</Button>
					</Col>
					<Col xs={12} md={3} className="my-auto">
						<span className="text-muted lead font-weight-bold">
							{val.productId.price}$
						</span>
					</Col>
				</Row>
			</Col>
		</Row>
	));

	return (
		<>
			<Layout>
				<ProfileDrawer activeNumber="4" />

				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<div
						style={{
							padding: 24,
							background: "#fff",
							textAlign: "center",
						}}
					>
						{items}
					</div>
					{calcTotalPrice(MyCart) ? (
						<CheckoutForm price={calcTotalPrice(MyCart)} />
					) : (
						<>you must add some thing first</>
					)}
				</Content>
			</Layout>
			<Footer style={{ textAlign: "center" }}>
				uni project total price : {calcTotalPrice(MyCart)}
			</Footer>
		</>
	);
};

export default Profile;
