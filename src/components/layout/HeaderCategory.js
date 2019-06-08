import React from "react";
import { Typography, Card, Col, Row } from "antd";
const { Meta } = Card;

const { Title } = Typography;
function HeaderCategory() {
	const testCard = (
		<Col xs={10} md={5} lg={5}>
			<Card
				hoverable
				className="my-2 rounded"
				cover={
					<img
						alt="example"
						src="https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_640.png"
					/>
				}
			>
				<Meta title="some category" />
			</Card>
		</Col>
	);

	return (
		<Col className="my-5  shadow-sm p-2 py-4">
			<Title level={4} className="text-muted border-bottom-0 ">
				Some Category
			</Title>
			<Row type="flex" justify="space-around" className="text-center">
				{testCard}
				{testCard}
				{testCard}
				{testCard}
			</Row>
		</Col>
	);
}

export default HeaderCategory;
