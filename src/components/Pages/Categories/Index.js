import React, { useEffect } from "react";
import { Layout, Typography, Card, Row, Col, Pagination } from "antd";
import SortButtons from "./SortButtons";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const Index = (props) => {
	const pageInit = props.match.params.pageInit;

	useEffect(() => {
		console.log(Date.now());
		// return () => {
		// };
	}, [props.location.search, props.match.params]);

	const testCard = (
		<Col xs={20} md={7} lg={5}>
			<Card
				loading={false}
				hoverable
				className="my-2 rounded"
				cover={
					<img
						alt="example"
						src="https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_640.png"
					/>
				}
			>
				<Meta title="some category" description={`pirce:${200}`} />
			</Card>
		</Col>
	);
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
					<SortButtons path={props} />
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
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
							{testCard}
						</Row>
					</Col>
					<Pagination
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
					/>
					,
				</div>
			</Content>
		</Layout>
	);
};

export default Index;
