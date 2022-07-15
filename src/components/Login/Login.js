import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/image/logo-born.png";
import url from "../Services/url";

export default function Login() {
	const [loginDataInput, setLoginDataInput] = useState({
		nome: "",
		password: "",
	});

	const navigate = useNavigate();

	function handleFormLogin(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	async function login(e) {
		e.preventDefault();

		try {
			await axios.post(url.login, loginDataInput);
			navigate("/home");
		} catch (error) {
			console.log(error);
			alert(error);
		}
	}

	return (
		<Box>
			<Container>
				<img src={logo} alt="logo" />
				<form onSubmit={login}>
					<input
						type="text"
						name="nome"
						placeholder="Nome"
						onChange={(e) => handleFormLogin(e)}
						value={loginDataInput.nome}
						required
					></input>
					<input
						type="password"
						name="password"
						placeholder="Senha"
						onChange={(e) => handleFormLogin(e)}
						value={loginDataInput.password}
						required
					></input>
					<button type="submit">Entrar</button>
				</form>
			</Container>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	border-radius: 5px;
	margin-top: 20vh;
	border: 1px solid #708090;
	background-color: white;
	padding: 5px;

	img {
		height: 150px;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			border: 1px solid #87ceeb;
			border-radius: 5px;
			margin-top: 10px;
			height: 30px;
			text-align: center;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 70px;
			margin: 10px auto 0 auto;
			background-color: #87ceeb;
		}
	}
`;
