import React from "react";
import { Button, Row, Col } from "antd";
import { query_string } from "../../func/queryString";

const Index = ({ path }) => {
	const props = path;
	const qs = query_string(props.location.search)
		? query_string(props.location.search)
		: {};
	return (
		<Row gutter={16} className=" border-bottom px-0 py-3 m-0">
			<Col xs={24} md={4}>
				<Button disabled>sort</Button>
			</Col>
			<Col span={4} xs={12} md={5}>
				<Button
					onClick={() =>
						props.history.push(
							`${props.location.pathname}?name=name&type=asc`,
						)
					}
					type={
						qs.name === "name" && qs.type === "asc" ? "primary" : ""
					}
				>
					name (asc)
				</Button>
			</Col>
			<Col span={4} xs={12} md={5}>
				<Button
					onClick={() =>
						props.history.push(
							`${props.location.pathname}?name=name&type=dec`,
						)
					}
					type={
						qs.name === "name" && qs.type === "dec" ? "primary" : ""
					}
				>
					name (des)
				</Button>
			</Col>
			<Col span={4} xs={12} md={5}>
				<Button
					onClick={() =>
						props.history.push(
							`${props.location.pathname}?name=price&type=asc`,
						)
					}
					type={
						qs.name === "price" && qs.type === "asc"
							? "primary"
							: ""
					}
				>
					price (asc)
				</Button>
			</Col>
			<Col span={4} xs={12} md={5}>
				<Button
					onClick={() =>
						props.history.push(
							`${props.location.pathname}?name=price&type=dec`,
						)
					}
					type={
						qs.name === "price" && qs.type === "dec"
							? "primary"
							: ""
					}
				>
					price (dec)
				</Button>
			</Col>
		</Row>
	);
};

export default Index;
