import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import { default as LoginLayout } from "../../layouts/AuthLayout/Login";
import UserContext from "../../contexts/UserContext";
import ModalContext from "../../contexts/ModalContext";
import { login } from "../../services/authApi";

export default function Login() {
	const [loginDataInput, setLoginDataInput] = useState({
		name: "",
		password: "",
	});

	const token = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modal = useContext(ModalContext);

	const navigate = useNavigate();

	async function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			const userData = await login(loginDataInput);

			setIsModalOpen(false);

			token?.setUserData(userData);

			localStorage.setItem("token", userData);

			navigate("/students");
		} catch (err: any) {
			modal?.setModalStatus({ status: "error", message: err.response.data });
		}
	}

	function goToSignup() {
		navigate("/signup");
	}

	return (
		<AuthLayout>
			<LoginLayout
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				loginDataInput={loginDataInput}
				submitForm={submitForm}
				goToSignup={goToSignup}
				setLoginDataInput={setLoginDataInput}
			/>
		</AuthLayout>
	);
}
