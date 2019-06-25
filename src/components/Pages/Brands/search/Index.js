import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Row, Col, Pagination } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const Index = (props) => {
	// const pageInit = props.match.params.pageInit;
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		axios
			.post("https://shonode.herokuapp.com/api/shop/searchBrand", {
				brandSearch: props.match.params.word,
			})
			.then((res) => {
				// let myopt = res.data.brands.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// setBrands(myopt);
				setBrands(res.data.brands);
				// console.log(res.data.brands);
			});
	}, [props.match.params]);

	// useEffect(() => {
	// 	console.log(Date.now());
	// 	// return () => {
	// 	// };
	// }, [props.location.search, props.match.params]);

	const testCard = brands.map((val) => (
		<Col key={val._id} xs={20} md={7} lg={5}>
			<Link to={`/products/brand/${val._id}`}>
				<Card
					loading={false}
					hoverable
					className="my-2 rounded"
					cover={<img alt="example" src={val.imageUrl} />}
				>
					<Meta title={`${val.name}`} />
				</Card>
			</Link>
		</Col>
	));
	return (
		<Layout className="layout">
			<Content style={{ padding: "0 32px" }}>
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
							Some Category
						</Title>
						<Row
							type="flex"
							justify="space-around"
							className="text-center"
						>
							{testCard}
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
				</div>
			</Content>
		</Layout>
	);
};

export default Index;
