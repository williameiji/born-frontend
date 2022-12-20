import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import TestaCPF from "../../shared/checkCPF";
import NewStudent from "../../layouts/Dashboard/NewStudents";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import { addStudent } from "../../services/studentsApi";
import headerConfig from "../../shared/headerConfig";
import InformationContext from "../../contexts/InformationContext";

export default function NewStudentsScreen() {
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
	const informations = useContext(InformationContext);

	const navigate = useNavigate();

	async function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			//disable for tests (must be a valid 'cpf')
			if (
				newStudentData.cpfStudent !== "" &&
				!TestaCPF(newStudentData.cpfStudent)
			) {
				throw new Error("CPF do aluno inválido");
			}

			if (newStudentData.cpfResp !== "" && !TestaCPF(newStudentData.cpfResp)) {
				throw new Error("CPF do responsável inválido");
			}
			//disable for tests (must be a valid 'cpf')

			await addStudent(newStudentData, headerConfig());
			modal?.setModalStatus({
				status: "Sucesso!",
				message: "Cadastro efetuado!",
			});
			informations.setRenderFinds([]);

			setTimeout(() => {
				navigate("/students");
			}, 2000);
		} catch (err: any) {
			modal?.setModalStatus({
				status: "Error:",
				message: err.response?.data || err.message,
			});
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
