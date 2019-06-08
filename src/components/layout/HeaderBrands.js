import React from "react";
import { Typography, Card, Col, Row } from "antd";
const { Meta } = Card;

const { Title } = Typography;
function HeaderCategory() {
	const testCard = (
		<Col xs={7} md={3} lg={3}>
			<Card
				hoverable
				className="my-2 rounded"
				cover={
					<img
						alt="example"
						src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/brands-512.png"
					/>
				}
			>
				<Meta title="Brand" />
			</Card>
		</Col>
	);

	return (
		<Col className="my-5  shadow-sm p-2 py-4">
			<Title level={4} className="text-muted border-bottom-0 ">
				Some brands
			</Title>
			<Row type="flex" justify="space-around" className="text-center">
				{testCard}
				{testCard}
				{testCard}
				{testCard}
				{testCard}
				{testCard}
				{testCard}
			</Row>
		</Col>
	);
}

export default HeaderCategory;
