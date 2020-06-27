import axios from "axios";

const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000
});

instance.interceptors.request.use(
	config => {
		// Add access-token header before request is sent
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

export const http = instance;
