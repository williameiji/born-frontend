import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import { default as SignupLayout } from "../../layouts/AuthLayout/Signup";
import ModalContext from "../../contexts/ModalContext";
import { signup } from "../../services/authApi";

export default function Signup() {
	const [signupDataInput, setSignupDataInput] = useState({
		name: "",
		password: "",
		key: 0,
	});
	const modal = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	async function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			await signup({
				...signupDataInput,
				key: Number(signupDataInput.key),
			});

			modal?.setModalStatus({
				status: "Sucesso!",
				message: "Cadastro efetuado!",
			});

			setTimeout(() => {
				navigate("/login");
				modal?.setModalStatus(null);
			}, 2000);
		} catch (err: any) {
			modal?.setModalStatus({ status: "Erro:", message: err.response.data });
		}
	}

	function goToLogin() {
		navigate("/login");
	}

	return (
		<AuthLayout>
			<SignupLayout
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				signupDataInput={signupDataInput}
				submitForm={submitForm}
				goToLogin={goToLogin}
				setSignupDataInput={setSignupDataInput}
			/>
		</AuthLayout>
	);
}
