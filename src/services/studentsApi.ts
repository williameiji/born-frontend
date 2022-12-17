import api from "./api";
import { AxiosRequestConfig } from "axios";
import { TEditForm } from "../layouts/Dashboard/EditStudentInformation/types";

export async function getAllStudents() {
	const { data } = await api.get("/students/search/all");
	return data;
}

export async function removeStudent(
	id: string,
	config: AxiosRequestConfig<any>
) {
	await api.delete(`/students/${id}`, config);
}

export async function editStudent(
	informations: TEditForm,
	config: AxiosRequestConfig<any>
) {
	await api.put(`/students/edit`, informations, config);
}

export async function getStudentByName(name: string) {
	const { data } = await api.get(`/students/search/${name}`);
	return data;
}

export async function addStudent(
	informations: TEditForm,
	config: AxiosRequestConfig<any>
) {
	await api.post(`/students`, informations, config);
}
