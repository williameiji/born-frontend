import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import TestaCPF from "../Shared/checkCPF";
import url from "../Services/url";

export default function EditStudentInformation({
	editInformation,
	setEditInformation,
	setRenderFinds,
}) {
	const navigate = useNavigate();

	function handleSignupForm(e) {
		let data = { ...editInformation };
		data[e.target.name] = e.target.value;
		setEditInformation(data);
	}

	async function editStudentInfo(e) {
		e.preventDefault();

		if (
			editInformation.cpfStudent !== "" &&
			!TestaCPF(editInformation.cpfStudent)
		)
			return alert("CPF do aluno inválido");

		if (editInformation.cpfResp !== "" && !TestaCPF(editInformation.cpfResp))
			return alert("CPF do responsável inválido");

		try {
			const promise = await axios.put(url.editInfo, editInformation);
			alert(promise.data);
			setRenderFinds([]);
			setEditInformation([]);
			navigate("/students");
		} catch (error) {
			alert(error);
		}
	}

	return (
		<Home>
			<Box>
				<form onSubmit={editStudentInfo}>
					<p>CADASTRO</p>
					<input
						type="text"
						name="date"
						placeholder="Data de início"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.date}
						required
					></input>
					<input
						type="text"
						placeholder="Valor da Mensalidade"
						name="value"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.value}
						required
					></input>
					<p>Dados do aluno:</p>
					<input
						type="text"
						name="name"
						placeholder="Nome do aluno"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.name}
						required
					></input>
					<BoxData>
						<input
							type="text"
							name="cpfStudent"
							placeholder="CPF"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.cpfStudent}
						></input>
						<input
							type="text"
							name="rgStudent"
							placeholder="RG"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.rgStudent}
						></input>
					</BoxData>
					<p>Caso menor:</p>
					<input
						type="text"
						name="nameResp"
						placeholder="Nome do responsável"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.nameResp}
					></input>
					<BoxData>
						<input
							type="text"
							name="cpfResp"
							placeholder="CPF"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.cpfResp}
						></input>
						<input
							type="text"
							name="rgResp"
							placeholder="RG"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.rgResp}
						></input>
					</BoxData>
					<p>Dados de localização:</p>
					<BoxAdress>
						<input
							type="text"
							name="adress"
							placeholder="Endereço"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.adress}
						></input>
						<input
							type="text"
							name="number"
							placeholder="Nº"
							onChange={(e) => handleSignupForm(e)}
							value={editInformation.number}
						></input>
					</BoxAdress>
					<input
						type="text"
						name="district"
						placeholder="Bairro"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.district}
					></input>
					<input
						type="text"
						name="city"
						placeholder="Cidade"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.city}
					></input>
					<input
						type="text"
						name="phone"
						placeholder="Telefone"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.phone}
					></input>
					<input
						type="text"
						name="email"
						placeholder="E-mail"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.email}
					></input>
					<button type="submit">Editar</button>
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
