import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import TestaCPF from "../Shared/checkCPF";
import url from "../Services/url";
import SignupForm from "./SignupForm";
import UserContext from "../Contexts/UserContext";

export default function SignupStudents() {
	const [signupData, setSignupData] = useState({
		date: "",
		value: "",
		name: "",
		cpfStudent: "",
		rgStudent: "",
		nameResp: "",
		cpfResp: "",
		rgResp: "",
		adress: "",
		number: "",
		district: "",
		city: "",
		phone: "",
		email: "",
	});

	const { userData } = useContext(UserContext);

	const navigate = useNavigate();

	function handleSignupForm(e) {
		let data = { ...signupData };
		data[e.target.name] = e.target.value;
		setSignupData(data);
	}

	async function signupNewStudent(e) {
		e.preventDefault();

		if (signupData.cpfStudent !== "" && !TestaCPF(signupData.cpfStudent))
			return alert("CPF do aluno inválido");

		if (signupData.cpfResp !== "" && !TestaCPF(signupData.cpfResp))
			return alert("CPF do responsável inválido");

		if (userData) {
			try {
				const promise = await axios.post(url.addStudent, signupData);
				alert(promise.data);
				navigate("/students");
			} catch (error) {
				alert(error);
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	return (
		<Home>
			<Box>
				<SignupForm
					signupData={signupData}
					handleSignupForm={handleSignupForm}
					signupNewStudent={signupNewStudent}
				/>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 75vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 40px;
			text-align: center;
			margin: 0 0 15px 0;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 40px;
			width: 100px;
			margin: 0 auto;
			background-color: #87ceeb;
		}

		input:valid {
			border: 2px solid green;
		}

		input:invalid {
			border: 2px solid red;
		}

		textarea:focus,
		input:focus {
			outline: none;
		}
	}
`;
