import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import url from "../Services/url";
import SignupForm from "./SignupForm";
import AuthScreen from "../AuthScreen/AuthScreen";
import ModalGeneric from "../Shared/ModalGeneric";
import ModalContext from "../Contexts/ModalContext";

export default function SignupScreen() {
	const [signupDataInput, setSignupDataInput] = useState({
		name: "",
		password: "",
		key: 0,
	});
	const { setModalStatus } = useContext(ModalContext);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	function handleFormSignup(e) {
		let loginData = { ...signupDataInput };
		loginData[e.target.name] = e.target.value;
		setSignupDataInput(loginData);
	}

	function signup(e) {
		e.preventDefault();

		setIsModalOpen(true);

		axios
			.post(url.signup, {
				...signupDataInput,
				key: Number(signupDataInput.key),
			})
			.then(() => {
				setModalStatus({ status: "Sucesso!", message: "Cadastro efetuado!" });
				setTimeout(() => {
					navigate("/");
				}, 2000);
			})
			.catch((err) => {
				setModalStatus({ status: "Erro:", message: err.response.data });
			});
	}

	function goToLogin() {
		navigate("/");
	}

	return (
		<AuthScreen>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<SignupForm handleFormSignup={handleFormSignup} signup={signup} />
			<LoginText onClick={goToLogin}>Já tem conta? Entrar</LoginText>
		</AuthScreen>
	);
}

const LoginText = styled.p`
	text-align: center;
	margin: 10px 0;
	color: lightblue;
	text-decoration: underline;
	cursor: pointer;
`;
