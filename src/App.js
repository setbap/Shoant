import React from "react";
import "./App.css";
import Index from "./components/Pages/Index";
import Brands from "./components/Pages/Brands/Index";
import Categories from "./components/Pages/Categories/Index";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.css";
import Header from "./components/BaseComponent/Header";
import Cart from "./components/Pages/Profile/Cart";
import Profile from "./components/Pages/Profile/Info";
import Orders from "./components/Pages/Profile/Orders";
import Like from "./components/Pages/Profile/Like";

import Search from "./components/Pages/Search/Index";

//auth import
import SignUp from "./components/Pages/Signup/index";
import Login from "./components/Pages/Login/index";
import ValidateEmail from "./components/Pages/ValidateEmail/index";
import ForgetPassword from "./components/Pages/ForgetPass/";
import ChangePassowrd from "./components/Pages/ValidatePassword/index";
//
import { Provider } from "react-redux";
import store from "./store";
import jwtToken from "jwt-decode";
import { SET_USER } from "./actions/type";
import stth from "./util/setTokenToHeader";
import { logoutuser } from "./actions/authActions";

//category
import AllCategory from "./components/Pages/Categories/Index";
import CatGender from "./components/Pages/Categories/gender/Index";
import CatSearch from "./components/Pages/Categories/search/Index";

//brand
import AllBrand from "./components/Pages/Brands/Index";
import BrandSearch from "./components/Pages/Brands/search/Index";

//products
import ProductsOfBrands from "./components/Pages/Products/brand/brand";
import ProductsOfCats from "./components/Pages/Products/category/category";
import AllProducts from "./components/Pages/Products/Index";
import Product from "./components/Pages/Product/product";

if (localStorage.jwtToken) {
	const secret = localStorage.jwtToken;
	const user = jwtToken(secret);
	stth(secret);
	store.dispatch({
		type: SET_USER,
		payload: user,
	});
	const exp = Date.now() / 1000;
	if (exp > user.exp) {
		store.dispatch(logoutuser());
		window.location.href = "/login";
	}
}

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Route exact path="/" component={Index} />
					{/* <Route
					exact
					path="/category/:name"
					render={(props) => (
						<Redirect to={`${props.location.pathname}/1`} />
					)}
				/> */}

					<Route exact path="/search" component={Search} />

					{/* ********* route to auth *******  */}

					<Route exact path="/signup" component={SignUp} />

					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/validate-email"
						component={ValidateEmail}
					/>
					<Route
						exact
						path="/forget-password"
						component={ForgetPassword}
					/>
					<Route
						exact
						path="/change-password"
						component={ChangePassowrd}
					/>

					{/* ********* route to auth *******  */}

					{/********** route to category  **********/}

					<Route
						exact
						path="/category/gender/:gender"
						component={CatGender}
					/>
					<Route
						exact
						path="/category/search/:word"
						component={CatSearch}
					/>
					<Route exact path="/category/all" component={AllCategory} />

					{/********** end route to category  **********/}

					{/********** route to /brand  **********/}

					<Route
						exact
						path="/brand/search/:word"
						component={BrandSearch}
					/>
					<Route exact path="/brand/all" component={AllBrand} />

					{/********** end route to category  **********/}

					{/********** route to /brand  **********/}

					<Route
						exact
						path="/products/brand/:word"
						component={ProductsOfBrands}
					/>

					<Route
						exact
						path="/products/category/:word"
						component={ProductsOfCats}
					/>

					<Route
						exact
						path="/products/all"
						render={() => <Redirect to="/products/all/1" />}
					/>

					<Route
						exact
						path="/products/all/:page"
						component={AllProducts}
					/>

					<Route
						exact
						path="/products/product/:pid"
						component={Product}
					/>

					{/********** end route to category  **********/}

					<Route
						exact
						path="/profile"
						render={(props) => <Redirect to="/profile/info" />}
					/>

					{/* <Route
					exact
					path="/brand/:name"
					render={(props) => (
						<Redirect to={`${props.location.pathname}/1`} />
					)}
				/> */}
					{/* <Route
					path="/category/:pName/:pageInit"
					component={Categories}
				/> */}

					<Route path="/profile/cart" component={Cart} />
					<Route path="/profile/info" component={Profile} />
					<Route path="/profile/like" component={Like} />
					<Route path="/profile/order" component={Orders} />
					{/* <Route path="/brand/:pName/:pageInit" component={Brands} /> */}
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
