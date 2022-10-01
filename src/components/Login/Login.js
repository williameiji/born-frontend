import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import url from "../Services/url";
import LoginForm from "./LoginForm";
import UserContext from "../Contexts/UserContext";
import AuthScreen from "../AuthScreen/AuthScreen";
import ModalGeneric from "../Shared/ModalGeneric";

export default function Login() {
	const [loginDataInput, setLoginDataInput] = useState({
		name: "",
		password: "",
	});
	const { setUserData } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	function handleFormLogin(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	function login(e) {
		e.preventDefault();
		setIsModalOpen(true);

		axios
			.post(url.login, loginDataInput)
			.then((response) => {
				setIsModalOpen(false);

				setUserData(response.data);

				navigate("/home");
			})
			.catch((err) => {
				setIsModalOpen(false);

				console.log(err);
			});
	}

	function goToSignup() {
		navigate("/signup");
	}

	return (
		<AuthScreen>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<LoginForm
				loginDataInput={loginDataInput}
				handleFormLogin={handleFormLogin}
				login={login}
			/>
			<SignupText onClick={goToSignup}>Cadastro de administradores</SignupText>
		</AuthScreen>
	);
}

const SignupText = styled.p`
	text-align: center;
	margin: 10px 0;
	color: grey;
	text-decoration: underline;
	cursor: pointer;
`;
