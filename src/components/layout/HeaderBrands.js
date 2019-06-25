import React, { useState, useEffect } from "react";
import { Typography, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
const { Meta } = Card;

const { Title } = Typography;
function HeaderCategory() {
	const [brand, setBrand] = useState([]);
	useEffect(() => {
		axios
			.get("https://shonode.herokuapp.com/api/shop/getbrandl")
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setBrand(res.data.brand);
				// console.log(res.data.brands);
			});
	}, []);

	const testCard = brand.map((val) => (
		<Col key={val._id} xs={7} md={3} lg={3}>
			<Link to={`/products/brand/${val._id}`}>
				<Card
					loading={false}
					hoverable
					className="my-2 rounded"
					cover={<img alt="example" src={val.imageUrl} />}
				>
					<Meta title={`${val.name} `} />
				</Card>
			</Link>
		</Col>
	));

	return (
		<Col className="my-5  shadow-sm p-2 py-4">
			<Title level={4} className="text-muted border-bottom-0 ">
				Some brands
			</Title>
			<Row type="flex" justify="space-around" className="text-center">
				{testCard}
				{/* {testCard}
				{testCard}
				{testCard}
				{testCard}
				{testCard}
				{testCard} */}
			</Row>
		</Col>
	);
}

export default HeaderCategory;
