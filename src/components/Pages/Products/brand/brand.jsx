import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Row, Col, Pagination } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const Index = (props) => {
	// const pageInit = props.match.params.pageInit;
	const [brand, setBrand] = useState([]);
	const [prodsofbrand, setProdsofbrand] = useState([]);
	useEffect(() => {
		axios
			.post("https://shonode.herokuapp.com/api/shop/findProductByBrand", {
				brandId: props.match.params.word,
			})
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setBrand(res.data.brand);
				setProdsofbrand(res.data.prods);
			});
	}, [props.match.params]);

	const testCard = prodsofbrand.map((val) => (
		<Col key={val._id} xs={20} md={7} lg={5}>
			<Link to={`/products/product/${val._id}`}>
				<Card
					loading={false}
					hoverable
					className="my-2 rounded"
					cover={<img alt="example" src={val.imageUrl} />}
				>
					<Meta
						title={val.title}
						description={`${val.price}$ ,     ${
							val.category.name
						} `}
					/>
				</Card>
			</Link>
		</Col>
	));
	return (
		<>
			<Layout className="layout">
				<Content style={{ padding: "0 32px" }}>
					<div
						className="brand_gradient"
						style={{
							background: "#fff",
							padding: 0,
							margin: "24px  auto",
							minHeight: 80,
						}}
					>
						<Row>
							<Col xs={20} md={6} className="text-white">
								<img
									alt="my nadombe"
									className="w-50 my-2"
									src={brand.imageUrl}
								/>
							</Col>
							<Col xs={22} md={18} className="mt-4">
								<Title
									className="text-left  text-white px-4"
									level={3}
								>
									{brand.name}
								</Title>
								<p className="text-justify text-white px-4">
									{brand.desc}
								</p>
							</Col>
						</Row>
					</div>
					<div
						style={{
							background: "#fff",
							padding: 0,
							minHeight: 680,
						}}
					>
						{/* <SortButtons path={props} /> */}
						<Col className="my-1 p-1 py-1">
							<Title
								level={4}
								className="text-muted border-bottom-0 "
							>
								Brnad
							</Title>
							<Row
								type="flex"
								justify="space-around"
								className="text-center"
							>
								{testCard}
								{/* {testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard}
								{testCard} */}
							</Row>
						</Col>
						{/* <Pagination
							defaultPageSize={12}
							total={502}
							defaultCurrent={parseInt(pageInit)}
							showTotal={(total, range) =>
								`${range[0]}-${range[1]} of ${total} items`
							}
							onChange={(page, pageSize) => {
								props.history.push(
									`${page}${props.location.search}`,
								);
							}}
						/> */}
						,
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default Index;
