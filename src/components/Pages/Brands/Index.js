import React, { useEffect } from "react";
import { Layout, Typography, Card, Row, Col, Pagination } from "antd";
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
									src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/brands-512.png"
								/>
							</Col>
							<Col xs={22} md={18} className="mt-4">
								<Title
									className="text-left  text-white px-4"
									level={3}
								>
									Brand
								</Title>
								<p className="text-justify text-white px-4">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Distinctio quam
									repudiandae modi illo assumenda? Aperiam,
									autem eos! Tenetur natus voluptate commodi
									asperiores, a dolore! Distinctio corporis
									facere officiis sit officia perspiciatis
									laboriosam. Eligendi maxime, aspernatur,
									blanditiis praesentium, tenetur
									reprehenderit delectus ab nisi unde
									veritatis eveniet nulla totam culpa.
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
		</>
	);
};

export default Index;
