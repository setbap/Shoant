import { GET_ERR, SET_USER, CLEAR_ERRORS } from "./type";
import axios from "axios";
import jwtToken from "jwt-decode";
import stth from "../util/setTokenToHeader";

export const reguser = (newUser, history) => (dispatch) => {
	axios
		.post("https://shonode.herokuapp.com/api/user/register", newUser)
		.then((res) => {
			history.push("/validate-email");
		})
		.catch((err) => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const validate_email = (id, history) => (dispatch) => {
	axios
		.post("https://shonode.herokuapp.com/api/user/register/validate", id)
		.then((res) => {
			history.push("/login");
		})
		.catch((err) => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const forget_pass = (email, history) => (dispatch) => {
	axios
		.post(
			"https://shonode.herokuapp.com/api/user/register/reset-password",
			email,
		)
		.then((res) => {
			history.push("/change-password");
		})
		.catch((err) => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const new_pass = (data, history) => (dispatch) => {
	axios
		.post(
			"https://shonode.herokuapp.com/api/user/register/reset-password/new-password",
			data,
		)
		.then((res) => {
			history.push("/login");
		})
		.catch((err) => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const loginuser = (data, history) => (dispatch) => {
	axios
		.post("https://shonode.herokuapp.com/api/user/login", data)
		.then((res) => {
			let { secret } = res.data;
			localStorage.setItem("jwtToken", secret);
			stth(secret);
			const user = jwtToken(secret);
			dispatch({
				type: SET_USER,
				payload: user,
			});
			history.push("/");
		})
		.catch((err) => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const logoutuser = (data) => (dispatch) => {
	stth(false);
	localStorage.removeItem("jwtToken");
	dispatch({
		type: SET_USER,
		payload: "",
	});
};

export const clearerr = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
		payload: "",
	});
};
