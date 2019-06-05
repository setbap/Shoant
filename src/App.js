import React from "react";
import "./App.css";
import Index from "./components/Pages/Index";
import Products from "./components/Pages/Products/Index";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.css";
import Header from "./components/BaseComponent/Header";
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
				<Route path="/category/:pName/:pageInit" component={Products} />
			</div>
		</BrowserRouter>
	);
}

export default App;
