import { useState, useContext, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "../Home/Home";
import DeclarationForm from "./DeclarationForm";
import { DeclarationBody } from "./DeclarationBody";
import UserContext from "../Contexts/UserContext";

export default function Declaration() {
	const [declarationDataInput, setDeclarationDataInput] = useState({
		nome: "",
		cpf: "",
		inicio: "",
		final: "",
		presença: "",
		pontos: "",
		horas: "",
		idioma: "",
	});
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);
	const componentRef = useRef();

	function handleDeclarationForm(e) {
		let data = { ...declarationDataInput };
		data[e.target.name] = e.target.value;
		setDeclarationDataInput(data);
	}

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function print(e) {
		e.preventDefault();
		if (userData) {
			handlePrint();
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	return (
		<Home>
			<Box>
				<DeclarationForm
					declarationDataInput={declarationDataInput}
					handleDeclarationForm={handleDeclarationForm}
					print={print}
				/>
				<DeclarationBody
					ref={componentRef}
					declarationDataInput={declarationDataInput}
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

		div {
			display: flex;
			margin-bottom: 10px;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 38px;
			width: 100px;
			background-color: #87ceeb;
			font-weight: bold;
			padding: 0 8px;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;
