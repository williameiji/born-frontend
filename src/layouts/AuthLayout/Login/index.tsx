import styled from "styled-components";

import LoginForm from "./LoginForm";
import ModalGeneric from "../../../shared/ModalGeneric";
import * as types from "./types";

export default function Login({
	setIsModalOpen,
	isModalOpen,
	loginDataInput,
	submitForm,
	goToSignup,
	setLoginDataInput,
}: types.TLogin) {
	return (
		<>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<LoginForm
				loginDataInput={loginDataInput}
				submitForm={submitForm}
				setLoginDataInput={setLoginDataInput}
			/>
			<SignupText onClick={goToSignup} data-cy="signup">
				Cadastro de administradores
			</SignupText>
		</>
	);
}

const SignupText = styled.p`
	text-align: center;
	margin: 10px 0;
	color: lightblue;
	text-decoration: underline;
	cursor: pointer;
`;
