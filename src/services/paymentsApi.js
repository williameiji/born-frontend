import api from "./api";

export async function getPaymentById(id) {
	const { data } = await api.get(`/payments/${id}`);
	return data;
}

export async function newPayment(data, config) {
	await api.post("/payments", data, config);
}
