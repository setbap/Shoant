import React from "react";
import { Layout, Menu, Icon, Popover, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutuser } from "../../actions/authActions";
import PropTypes from "prop-types";

const { Header, Avatar } = Layout;
const { SubMenu } = Menu;

const Index = (props) => {
	const out_content = (
		<Menu mode="inline">
			<Menu.Item key="1">
				<Link to="/signup">sign up</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to="/login">login</Link>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to="/category/all">all categories</Link>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to="/brand/all">all brands</Link>
			</Menu.Item>
			<Menu.Item key="5">
				<Link to="/search">search</Link>
			</Menu.Item>
			<Menu.Item key="5">
				<Link to="/products/all">all products</Link>
			</Menu.Item>
		</Menu>
	);

	const in_content = (
		<Menu mode="inline">
			<Menu.Item key="1" onClick={() => props.logoutuser()}>
				logout
			</Menu.Item>
			<Menu.Item key="2">
				<Link to="/profile/cart">Cart</Link>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to="/category/all">all categories</Link>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to="/brand/all">all brands</Link>
			</Menu.Item>
			<Menu.Item key="5">
				<Link to="/products/all">all products</Link>
			</Menu.Item>
			<Menu.Item key="6">
				<Icon type="search" />
				<Link to="/search">search</Link>
			</Menu.Item>
			<Menu.Item key="7">
				<Icon type="user" />
				<Link to="/profile">profile</Link>
			</Menu.Item>
		</Menu>
	);

	return (
		<Header className="d-flex text-light justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Shonod admin</span>
			</Link>

			<Popover
				overlayClassName="popover-menu"
				placement="bottomRight"
				content={props.auth.isAuth ? in_content : out_content}
				trigger="click"
				arrowPointAtCenter
			>
				<Button type="primary" className="mb-0 my-auto h1" icon="menu">
					Menu
				</Button>
			</Popover>
		</Header>
	);
};

Index.propTypes = {
	logoutuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.Auth,
});
export default connect(
	mapStateToProps,
	{ logoutuser },
)(Index);
