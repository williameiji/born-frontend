import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import TestaCPF from "../../shared/checkCPF";
import NewStudent from "../../layouts/Dashboard/NewStudents";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import { addStudent } from "../../services/studentsApi";
import { getToken } from "../../shared/getToken";
import { TEditInformation } from "../../layouts/Dashboard/SearchStudent/types";

export default function NewStudentsScreen({
	setRenderFinds,
}: TEditInformation) {
	const [newStudentData, setNewStudentData] = useState({
		date: "",
		value: "",
		name: "",
		cpfStudent: "",
		rgStudent: "",
		nameResp: "",
		cpfResp: "",
		rgResp: "",
		adress: "",
		number: "",
		district: "",
		city: "",
		phone: "",
		email: "",
	});

	const modal = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	let config = {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};

	async function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		if (getToken()) {
			try {
				//disable for tests (must be a valid 'cpf')
				if (
					newStudentData.cpfStudent !== "" &&
					!TestaCPF(newStudentData.cpfStudent)
				) {
					throw new Error("CPF do aluno inválido");
				}

				if (
					newStudentData.cpfResp !== "" &&
					!TestaCPF(newStudentData.cpfResp)
				) {
					throw new Error("CPF do responsável inválido");
				}
				//disable for tests (must be a valid 'cpf')

				await addStudent(newStudentData, config);
				modal?.setModalStatus({
					status: "Sucesso!",
					message: "Cadastro efetuado!",
				});
				setRenderFinds([]);

				setTimeout(() => {
					navigate("/students");
				}, 2000);
			} catch (err: any) {
				modal?.setModalStatus({
					status: "Error:",
					message: err.response?.data || err.message,
				});

				if (err.response?.status === 401) {
					setTimeout(() => {
						setIsModalOpen(false);
						navigate("/login");
					}, 2000);
				}
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/login");
		}
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<NewStudent
				newStudentData={newStudentData}
				setNewStudentData={setNewStudentData}
				submit={submit}
			/>
		</Home>
	);
}