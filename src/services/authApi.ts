import api from "./api";

export async function login(loginData: { name: string; password: string }) {
	const response = await api.post("/login", loginData);
	return response.data;
}

export async function signup(signupData: {
	name: string;
	password: string;
	key: number;
}) {
	const response = await api.post("/signup", signupData);
	return response.data;
}
