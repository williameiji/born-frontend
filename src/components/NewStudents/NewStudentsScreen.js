import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import TestaCPF from "../Shared/checkCPF";
import url from "../Services/url";
import NewStudentsForm from "./NewStudentsForm";
import UserContext from "../Contexts/UserContext";
import ModalContext from "../Contexts/ModalContext";
import ModalGeneric from "../Shared/ModalGeneric";

export default function NewStudentsScreen() {
	const [signupData, setSignupData] = useState({
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

	const { userData } = useContext(UserContext);
	const { setModalStatus } = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	function handleSignupForm(e) {
		let data = { ...signupData };
		data[e.target.name] = e.target.value;
		setSignupData(data);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${userData}`,
		},
	};

	async function signupNewStudent(e) {
		e.preventDefault();
		setIsModalOpen(true);

		//disable for tests (must be a valid 'cpf')
		if (signupData.cpfStudent !== "" && !TestaCPF(signupData.cpfStudent))
			return alert("CPF do aluno inválido");

		if (signupData.cpfResp !== "" && !TestaCPF(signupData.cpfResp))
			return alert("CPF do responsável inválido");
		//disable for tests (must be a valid 'cpf')

		if (userData) {
			try {
				await axios.post(url.addStudent, signupData, config);
				setModalStatus({ status: "Sucesso!", message: "Cadastro efetuado!" });

				setTimeout(() => {
					navigate("/students");
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
				<NewStudentsForm
					signupData={signupData}
					handleSignupForm={handleSignupForm}
					signupNewStudent={signupNewStudent}
				/>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;
	margin-left: 5px;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			width: 100%;
		}

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

		p:first-child {
			text-align: center;
			font-weight: bold;
		}

		p {
			font-weight: bold;
			margin-bottom: 15px;
		}
	}
`;
