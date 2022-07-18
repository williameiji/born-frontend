import { useState } from "react";
import styled from "styled-components";

import Home from "../Home/Home";
import DeclarationForm from "./DeclarationForm";
import DeclarationBody from "./DeclarationBody";

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

	function handleDeclarationForm(e) {
		let data = { ...declarationDataInput };
		data[e.target.name] = e.target.value;
		setDeclarationDataInput(data);
	}

	return (
		<Home>
			<Box>
				<DeclarationForm
					declarationDataInput={declarationDataInput}
					handleDeclarationForm={handleDeclarationForm}
				/>
				<div id="printablediv">
					<DeclarationBody declarationDataInput={declarationDataInput} />
				</div>
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

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 30px;
			text-align: center;
			margin-right: 10px;

			:last-child {
				margin-right: 0;
			}
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 100px;
			margin-left: 10px;
			background-color: #87ceeb;
		}
	}
`;
