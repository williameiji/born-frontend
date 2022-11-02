import styled from "styled-components";

import LoginForm from "./LoginForm";
import ModalGeneric from "../Shared/ModalGeneric";

export default function Login({
	setIsModalOpen,
	isModalOpen,
	loginDataInput,
	handleFormLogin,
	login,
	goToSignup,
}) {
	return (
		<>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<LoginForm
				loginDataInput={loginDataInput}
				handleFormLogin={handleFormLogin}
				login={login}
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
