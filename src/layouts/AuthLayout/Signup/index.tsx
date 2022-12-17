import styled from "styled-components";

import SignupForm from "./SignupForm";
import ModalGeneric from "../../../shared/ModalGeneric";
import * as types from "./types";

export default function Signup({
	isModalOpen,
	setIsModalOpen,
	signupDataInput,
	submitForm,
	goToLogin,
	setSignupDataInput,
}: types.TSignup) {
	return (
		<>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<SignupForm
				signupDataInput={signupDataInput}
				submitForm={submitForm}
				setSignupDataInput={setSignupDataInput}
			/>
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
