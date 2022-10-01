import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Home from "../Home/Home";
import TestaCPF from "../Shared/checkCPF";
import url from "../Services/url";
import EditStudentForm from "./EditStudentForm";
import UserContext from "../Contexts/UserContext";

export default function EditStudentInformation({
	editInformation,
	setEditInformation,
	setRenderFinds,
}) {
	const navigate = useNavigate();

	const { userData } = useContext(UserContext);

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

		if (
			editInformation.cpfStudent !== "" &&
			!TestaCPF(editInformation.cpfStudent)
		)
			return alert("CPF do aluno inválido");

		if (editInformation.cpfResp !== "" && !TestaCPF(editInformation.cpfResp))
			return alert("CPF do responsável inválido");

		if (userData) {
			try {
				const promise = await axios.put(url.editInfo, editInformation, config);
				alert(promise.data);
				setRenderFinds([]);
				setEditInformation([]);
				navigate("/students");
			} catch (error) {
				alert(error);
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	return (
		<Home>
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

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 40px;
			text-align: center;
			margin: 0 0 15px 0;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 40px;
			width: 100px;
			margin: 0 auto;
			background-color: #87ceeb;
		}

		input:valid {
			border: 2px solid green;
		}

		input:invalid {
			border: 2px solid red;
		}

		textarea:focus,
		input:focus {
			outline: none;
		}
	}
`;
