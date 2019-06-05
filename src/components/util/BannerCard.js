import React from "react";
import styles from "./BannerCard.module.css";
function BannerCard(props) {
	return (
		<div className={styles.card}>
			<div className={styles.card_image}>
				<img src={props.img} alt="collection of products" />
			</div>
			<div className={styles.card_title}>
				<p>{props.title}</p>
			</div>
		</div>
	);
}

export default BannerCard;
