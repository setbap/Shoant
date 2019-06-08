import { OverPack } from "rc-scroll-anim";
import Texty from "rc-texty";

import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import React, { Component } from "react";

class Demo extends Component {
	myAni = {
		animation: [
			{ x: 130, type: "set" },
			{ x: 100, delay: 500, duration: 450 },
			{
				ease: "easeOutQuart",
				duration: 300,
				x: 0,
				backgroundColor: "pink",
			},
			{
				letterSpacing: 1.2,
				delay: -300,
				scale: 1,

				ease: "easeInOutQuint",
				duration: 1000,
			},
			{
				backgroundColor: "transparent",
				letterSpacing: 1,
				scale: 1,
				width: "100%",
				delay: -300,
				duration: 1000,
				ease: "easeInOutQuint",
			},
		],
	};
	render() {
		return (
			<OverPack
				style={{
					overflow: "hidden",

					backgroundColor: "#21D4FD",
					backgroundImage:
						" linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
				}}
			>
				<TweenOne
					key="0"
					animation={{ opacity: 1 }}
					// key="QueueAnim"
					type={["bottom", "top"]}
					delay={1000}
					style={{
						opacity: 0,
						marginBottom: 10,
					}}
				/>
				<QueueAnim key="queue" leaveReverse>
					<div
						style={{
							height: 120,
							fontSize: "300%",
							fontWeight: 700,
						}}
						key="a"
						className="display-1 d-inline-block mL-4 my-2"
					>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							Sina
						</Texty>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							ebrahimi
						</Texty>
					</div>
					<br key="b" />
					<div
						style={{
							height: 120,
							fontSize: "300%",
							fontWeight: 700,
						}}
						key="c"
						className="display-1 d-inline-block mL-4 my-2"
					>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							Mahdi
						</Texty>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							Talebi
						</Texty>
					</div>
					<br key="d" />

					<div
						style={{
							height: 120,
							fontSize: "300%",
							fontWeight: 700,
						}}
						key="e"
						className="display-1 d-inline-block mL-4 my-2"
					>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							Vahid
						</Texty>
						<Texty
							type="mask-top"
							delay={400}
							component={TweenOne}
							componentProps={this.myAni}
						>
							phirozian
						</Texty>
					</div>
				</QueueAnim>
			</OverPack>
		);
	}
}

export default Demo;
