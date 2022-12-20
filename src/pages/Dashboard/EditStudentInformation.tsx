import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Home from "./Index";
import TestaCPF from "../../shared/checkCPF";
import EditStudentForm from "../../layouts/Dashboard/EditStudentInformation";
import ModalGeneric from "../../shared/ModalGeneric";
import ModalContext from "../../contexts/ModalContext";
import { editStudent } from "../../services/studentsApi";
import EditContext from "../../contexts/EditInformationContext";
import headerConfig from "../../shared/headerConfig";
import InformationContext from "../../contexts/InformationContext";

export default function EditStudentInformation() {
	const navigate = useNavigate();

	const modal = useContext(ModalContext);
	const informationToEdit = useContext(EditContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const information = useContext(InformationContext);

	async function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setIsModalOpen(true);

		try {
			if (
				informationToEdit.editInformation.cpfStudent !== "" &&
				!TestaCPF(informationToEdit.editInformation.cpfStudent)
			)
				throw new Error("CPF do aluno inválido");

			if (
				informationToEdit.editInformation.cpfResp !== "" &&
				!TestaCPF(informationToEdit.editInformation.cpfResp)
			)
				throw new Error("CPF do responsável inválido");

			await editStudent(informationToEdit?.editInformation, headerConfig());
			modal?.setModalStatus({
				status: "Sucesso!",
				message: "Cadastro editado!",
			});

			setTimeout(() => {
				navigate("/students");
				information.setRenderFinds([]);
				informationToEdit.setEditInformation({
					_id: "",
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
			<Box>
				<EditStudentForm
					editInformation={informationToEdit.editInformation}
					setEditInformation={informationToEdit.setEditInformation}
					submit={submit}
				/>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		button {
			border: none;
			border-radius: 5px;
			height: 40px;
			width: 100px;
			margin: 0 auto;
			background-color: #87ceeb;
			font-weight: bold;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}

		p {
			font-weight: bold;
			margin-bottom: 15px;
		}
	}
`;
