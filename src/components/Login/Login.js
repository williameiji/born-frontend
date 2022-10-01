import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/image/logo-born.png";
import url from "../Services/url";
import LoginForm from "./LoginForm";
import UserContext from "../Contexts/UserContext";
import ModalGeneric from "../Shared/ModalGeneric";

export default function Login() {
	const [loginDataInput, setLoginDataInput] = useState({
		name: "",
		password: "",
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { setUserData } = useContext(UserContext);

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

	return (
		<Box>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Container>
				<img src={logo} alt="logo" />
				<LoginForm
					loginDataInput={loginDataInput}
					handleFormLogin={handleFormLogin}
					login={login}
				/>
			</Container>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	border-radius: 5px;
	margin-top: 20vh;
	border: 1px solid #708090;
	background-color: white;
	padding: 5px;

	img {
		height: 150px;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			border: 1px solid #87ceeb;
			border-radius: 5px;
			margin-top: 10px;
			height: 30px;
			text-align: center;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 70px;
			margin: 10px auto 0 auto;
			background-color: #87ceeb;
			font-weight: bold;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;
