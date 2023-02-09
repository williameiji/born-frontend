import api from "./api";
import { AxiosRequestConfig } from "axios";
import { Payment } from "../layouts/Dashboard/Payment/types";
import { getToken } from "../shared/getToken";

let configHeader = {
	headers: {
		Authorization: `Bearer ${getToken()}`,
	},
};

export async function getPaymentById(id: string) {
	const { data } = await api.get(`/payments/${id}`);
	return data;
}

export async function newPayment(
	data: Payment,
	config: AxiosRequestConfig<any>
) {
	await api.post("/payments", data, config);
}

export async function deletePayments(id: string) {
	await api.delete(`/payments/${id}`, configHeader);
}
