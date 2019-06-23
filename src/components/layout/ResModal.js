import { Modal, Button } from "antd";
import React from "react";

const Info = ({ data }) => {
	Modal.info({
		title: "Err :(",
		content: data.length
			? data.map((item, index) => {
					return (
						<div className="modal-items" key={index}>
							<span className="modal-param">{item.param} :</span>
							<span className="modal-msg"> {item.msg}</span>
						</div>
					);
			  })
			: "",
		onOk() {},
	});
};

export default Info;
