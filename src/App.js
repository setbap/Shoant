import React from "react";
import "./App.css";
import Index from "./components/Pages/Index";
import Brands from "./components/Pages/Brands/Index";
import Categories from "./components/Pages/Categories/Index";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.css";
import Header from "./components/BaseComponent/Header";
import CheckOut from "./components/Pages/Checkout/Index";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Route exact path="/" component={Index} />
				<Route
					exact
					path="/category/:name"
					render={(props) => (
						<Redirect to={`${props.location.pathname}/1`} />
					)}
				/>
				<Route
					exact
					path="/brand/:name"
					render={(props) => (
						<Redirect to={`${props.location.pathname}/1`} />
					)}
				/>
				<Route
					path="/category/:pName/:pageInit"
					component={Categories}
				/>

				<Route path="/cart/" component={CheckOut} />
				<Route path="/brand/:pName/:pageInit" component={Brands} />
			</div>
		</BrowserRouter>
	);
}

export default App;
