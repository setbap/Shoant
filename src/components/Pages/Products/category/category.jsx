import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Row, Col, Pagination } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const Index = (props) => {
	// const pageInit = props.match.params.pageInit;
	const [cat, setCat] = useState({});
	const [prodsofcat, setProdsofcat] = useState([]);
	useEffect(() => {
		axios
			.post("https://shonode.herokuapp.com/api/shop/findProductByCat", {
				catId: props.match.params.word,
			})
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);

				setCat(res.data.cat);

				setProdsofcat(res.data.prods);
			});
	}, [props.match.params]);

	const testCard = prodsofcat.map((val) => (
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
						description={`${val.price}$ ,     ${val.brand?val.brand.name:"" } `}
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
									src={cat.imageUrl}
								/>
							</Col>
							<Col xs={22} md={18} className="mt-4">
								<Title
									className="text-left  text-white px-4"
									level={3}
								>
									{cat.name}
									{"  "}--{"   "}
									{cat.gender}
								</Title>
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
								Category of {cat.name} and count of products{" "}
								{prodsofcat.length}
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
