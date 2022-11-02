import api from "./api";

export async function login(loginData) {
	const response = await api.post("/login", loginData);
	return response.data;
}

export async function signup(signupData) {
	const response = await api.post("/signup", signupData);
	return response.data;
}
