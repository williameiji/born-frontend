import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Home from "../Home/Home";
import TestaCPF from "../Shared/checkCPF";
import url from "../Services/url";
import EditStudentForm from "./EditStudentForm";
import UserContext from "../Contexts/UserContext";
import ModalGeneric from "../Shared/ModalGeneric";
import ModalContext from "../Contexts/ModalContext";

export default function EditStudentInformation({
	editInformation,
	setEditInformation,
	setRenderFinds,
}) {
	const navigate = useNavigate();

	const { userData } = useContext(UserContext);
	const { setModalStatus } = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleSignupForm(e) {
		let data = { ...editInformation };
		data[e.target.name] = e.target.value;
		setEditInformation(data);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${userData}`,
		},
	};

	async function editStudentInfo(e) {
		e.preventDefault();

		setIsModalOpen(true);

		if (
			editInformation.cpfStudent !== "" &&
			!TestaCPF(editInformation.cpfStudent)
		)
			return alert("CPF do aluno inválido");

		if (editInformation.cpfResp !== "" && !TestaCPF(editInformation.cpfResp))
			return alert("CPF do responsável inválido");

		if (userData) {
			try {
				await axios.put(url.editInfo, editInformation, config);
				setModalStatus({ status: "Sucesso!", message: "Cadastro editado!" });

				setTimeout(() => {
					navigate("/students");
					setRenderFinds([]);
					setEditInformation(null);
				}, 2000);
			} catch (err) {
				setModalStatus({ status: "Error:", message: err.response.data });
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
					editInformation={editInformation}
					handleSignupForm={handleSignupForm}
					editStudentInfo={editStudentInfo}
				/>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 75vh;
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
