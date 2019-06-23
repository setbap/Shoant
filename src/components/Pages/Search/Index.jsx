import React from "react";
import { Input } from "antd";

const { Search } = Input;
const SearchC = (props) => {
	return (
		<div>
			{/* <Search
				placeholder="input search text"
				onSearch={(value) => console.log(value)}
				style={{ width: 200 }}
			/> */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Search
				style={{ width: 400 }}
				placeholder="Brand search "
				onSearch={(value) =>
					props.history.push(`/brand/search/${value}`)
				}
				size="large"
				enterButton
			/>
			<br />
			<br />
			<Search
				style={{ width: 400 }}
				placeholder="category saerch"
				enterButton
				size="large"
				onSearch={(value) =>
					props.history.push(`/category/search/${value}`)
				}
			/>
		</div>
	);
};

export default SearchC;
