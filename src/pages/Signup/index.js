import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import { default as SignupLayout } from "../../layouts/Signup/Signup";
import ModalContext from "../../contexts/ModalContext";
import { signup } from "../../services/authApi";

export default function Signup() {
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

	async function submitForm(e) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			await signup({
				...signupDataInput,
				key: Number(signupDataInput.key),
			});

			setModalStatus({ status: "Sucesso!", message: "Cadastro efetuado!" });

			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (err) {
			setModalStatus({ status: "Erro:", message: err.response.data });
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
				handleFormSignup={handleFormSignup}
				submitForm={submitForm}
				goToLogin={goToLogin}
			/>
		</AuthLayout>
	);
}
