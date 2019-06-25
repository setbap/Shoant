import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Typography, Card, Col, Row } from "antd";
const { Meta } = Card;

const { Title } = Typography;
function HeaderCategory() {
	const [cat, setCat] = useState([]);

	useEffect(() => {
		axios
			.get("https://shonode.herokuapp.com/api/shop/getcatl")
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setCat(res.data.cat);
				// console.log(res.data.brands);
			});
	}, []);

	const testCard = cat.map((val) => (
		<Col key={val._id} xs={20} md={7} lg={5}>
			<Link to={`/products/category/${val._id}`}>
				<Card
					loading={false}
					hoverable
					className="my-2 rounded"
					cover={<img alt="example" src={val.imageUrl} />}
				>
					<Meta title={`${val.name} - ${val.gender}`} />
				</Card>
			</Link>
		</Col>
	));

	return (
		<Col className="my-5  shadow-sm p-2 py-4">
			<Title level={4} className="text-muted border-bottom-0 ">
				Some Category
			</Title>
			<Row type="flex" justify="space-around" className="text-center">
				{testCard}
			</Row>
		</Col>
	);
}

export default HeaderCategory;
