import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import BannerCard from "../util/BannerCard";
function HeaderCollection() {
	return (
		<Row type="flex" justify="space-around">
			<Col
				type="flex"
				justify="space-around"
				className="col-xs-12 col-lg-8 m-auto col-md-7"
			>
				<Link to="content">
					<div
						style={{
							height: 200,
						}}
					>
						<BannerCard
							img="https://i.redd.it/b3esnz5ra34y.jpg"
							title="My Card"
						/>
					</div>
				</Link>
				<Link to="content">
					<div
						style={{
							height: 200,
						}}
					>
						<BannerCard
							img="https://i.redd.it/b3esnz5ra34y.jpg"
							title="My Card"
						/>
					</div>
				</Link>
			</Col>

			<Col className="col-xs-10 col-lg-4  mx-auto my-1 col-md-5 ">
				<Link to="content">
					<BannerCard
						style={{
							height: 400,
						}}
						img="https://i.redd.it/b3esnz5ra34y.jpg"
						title="My Card"
					/>
				</Link>
			</Col>
		</Row>
	);
}

export default HeaderCollection;
