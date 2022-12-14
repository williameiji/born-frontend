import styled from "styled-components";

import SignupForm from "./SignupForm";
import ModalGeneric from "../../../shared/ModalGeneric";
import * as types from "./types";

export default function Signup({
	isModalOpen,
	setIsModalOpen,
	handleFormSignup,
	submitForm,
	goToLogin,
}: types.TSignup) {
	return (
		<>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<SignupForm handleFormSignup={handleFormSignup} submitForm={submitForm} />
			<LoginText onClick={goToLogin}>Já tem conta? Entrar</LoginText>
		</>
	);
}

const LoginText = styled.p`
	text-align: center;
	margin: 10px 0;
	color: lightblue;
	text-decoration: underline;
	cursor: pointer;
`;
