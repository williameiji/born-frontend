import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Home from "./Index";
import TestaCPF from "../../shared/checkCPF";
import EditStudentForm from "../../layouts/Dashboard/EditStudentInformation";
import ModalGeneric from "../../shared/ModalGeneric";
import ModalContext from "../../contexts/ModalContext";
import { editStudent } from "../../services/studentsApi";
import { getToken } from "../../shared/getToken";
import { TEditInformation } from "../../layouts/Dashboard/SearchStudent/types";
import EditContext from "../../contexts/EditInformationContext";

export default function EditStudentInformation({
	setRenderFinds,
}: TEditInformation) {
	const navigate = useNavigate();

	const modalStatus = useContext(ModalContext);
	const informationToEdit = useContext(EditContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

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

				await editStudent(informationToEdit?.editInformation, config);
				modalStatus?.setModalStatus({
					status: "Sucesso!",
					message: "Cadastro editado!",
				});

				setTimeout(() => {
					navigate("/students");
					setRenderFinds([]);
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
				modalStatus?.setModalStatus({
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
			navigate("/");
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
