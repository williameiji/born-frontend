import api from "./api";

export async function getAllStudents() {
	const { data } = await api.get("/students/search/all");
	return data;
}

export async function removeStudent(id, config) {
	await api.delete(`/students/${id}`, {}, config);
}

export async function editStudent(informations, config) {
	await api.put(`/students/edit`, informations, config);
}

export async function getStudentByName(name) {
	const { data } = await api.get(`/students/search/${name}`);
	return data;
}

export async function addStudent(informations, config) {
	await api.post(`/students`, informations, config);
}
