import styled from "styled-components";
import { useState } from "react";

import Home from "../Home/Home";

export default function SearchStudent() {
	const [loginDataInput, setLoginDataInput] = useState({
		nome: "",
	});

	function handleFormSearch(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	return (
		<Home>
			<Box>
				<form>
					<input
						type="text"
						name="nome"
						placeholder="Nome do aluno"
						onChange={(e) => handleFormSearch(e)}
						value={loginDataInput.name}
					></input>
					<button type="submit">Pesquisar</button>
				</form>
				<ContainerStudents></ContainerStudents>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 80vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;

	form {
		display: flex;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 30px;
			text-align: center;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 100px;
			margin-left: 10px;
			background-color: #87ceeb;
		}
	}
`;

const ContainerStudents = styled.div`
	width: 100%;
	height: 90%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
`;
