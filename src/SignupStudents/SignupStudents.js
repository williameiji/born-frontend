import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Home from "../components/Home/Home";
import TestaCPF from "../components/Shared/checkCPF";
import url from "../components/Services/url";

export default function SignupStudents() {
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

	const navigate = useNavigate();

	function handleSignupForm(e) {
		let data = { ...signupData };
		data[e.target.name] = e.target.value;
		setSignupData(data);
	}

	async function signupNewStudent(e) {
		e.preventDefault();

		if (signupData.cpfStudent !== "" && !TestaCPF(signupData.cpfStudent))
			return alert("CPF do aluno inválido");

		if (signupData.cpfResp !== "" && !TestaCPF(signupData.cpfResp))
			return alert("CPF do responsável inválido");

		try {
			const promise = await axios.post(url.addStudent, signupData);
			alert(promise.data);
			navigate("/students");
		} catch (error) {
			alert(error);
		}
	}

	return (
		<Home>
			<Box>
				<form onSubmit={signupNewStudent}>
					<p>CADASTRO</p>
					<input
						type="text"
						name="date"
						placeholder="Data de início"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.date}
						required
					></input>
					<input
						type="text"
						placeholder="Valor da Mensalidade"
						name="value"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.value}
						required
					></input>
					<p>Dados do aluno:</p>
					<input
						type="text"
						name="name"
						placeholder="Nome do aluno"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.name}
						required
					></input>
					<BoxData>
						<input
							type="text"
							name="cpfStudent"
							placeholder="CPF"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.cpfStudent}
						></input>
						<input
							type="text"
							name="rgStudent"
							placeholder="RG"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.rgStudent}
						></input>
					</BoxData>
					<p>Caso menor:</p>
					<input
						type="text"
						name="nameResp"
						placeholder="Nome do responsável"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.nameResp}
					></input>
					<BoxData>
						<input
							type="text"
							name="cpfResp"
							placeholder="CPF"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.cpfResp}
						></input>
						<input
							type="text"
							name="rgResp"
							placeholder="RG"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.rgResp}
						></input>
					</BoxData>
					<p>Dados de localização:</p>
					<BoxAdress>
						<input
							type="text"
							name="adress"
							placeholder="Endereço"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.adress}
						></input>
						<input
							type="text"
							name="number"
							placeholder="Nº"
							onChange={(e) => handleSignupForm(e)}
							value={signupData.number}
						></input>
					</BoxAdress>
					<input
						type="text"
						name="district"
						placeholder="Bairro"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.district}
					></input>
					<input
						type="text"
						name="city"
						placeholder="Cidade"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.city}
					></input>
					<input
						type="text"
						name="phone"
						placeholder="Telefone"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.phone}
					></input>
					<input
						type="text"
						name="email"
						placeholder="E-mail"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.email}
					></input>
					<button type="submit">Cadastrar</button>
				</form>
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
const BoxAdress = styled.span`
	display: flex;
	flex-direction: row;

	input:first-child {
		margin-right: 10px;
	}

	input:last-child {
		width: 30%;
	}
`;

const BoxData = styled.span`
	display: flex;
	flex-direction: row;

	input:first-child {
		margin-right: 10px;
	}
`;
