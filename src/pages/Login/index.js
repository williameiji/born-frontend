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

	const { setUserData } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { setModalStatus } = useContext(ModalContext);

	const navigate = useNavigate();

	function handleFormLogin(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	async function submitForm(e) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			const userData = await login(loginDataInput);

			setIsModalOpen(false);

			setUserData(userData);

			localStorage.setItem("token", userData);

			navigate("/students");
		} catch (err) {
			setModalStatus({ status: "error", message: err.response.data });
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
				handleFormLogin={handleFormLogin}
				submitForm={submitForm}
				goToSignup={goToSignup}
			/>
		</AuthLayout>
	);
}
