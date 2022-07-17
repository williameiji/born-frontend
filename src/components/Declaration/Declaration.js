import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Home from "../Home/Home";
import logo from "../../assets/image/logo-born.png";
import printHere from "../Shared/printHere.js";
import mCPF from "../Shared/mCPF";

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
				<form>
					<div>
						<input
							type="text"
							name="nome"
							placeholder="Nome"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.nome}
						></input>
						<input
							type="text"
							name="cpf"
							placeholder="CPF"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.cpf}
						></input>
						<input
							type="text"
							name="idioma"
							placeholder="Idioma"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.idioma}
						></input>
						<button onClick={printHere}>Imprimir</button>
					</div>
					<div>
						<input
							type="text"
							name="inicio"
							placeholder="Data de início"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.inicio}
						></input>
						<input
							type="text"
							name="final"
							placeholder="Data final"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.final}
						></input>
						<input
							type="text"
							name="horas"
							placeholder="Total em horas"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.horas}
						></input>
						<input
							type="text"
							name="pontos"
							placeholder="Pontos"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.pontos}
						></input>
						<input
							type="text"
							name="presença"
							placeholder="Frequência"
							onChange={(e) => handleDeclarationForm(e)}
							value={declarationDataInput.presença}
						></input>
					</div>
				</form>
				<div id="printablediv">
					<ContainerReceipt>
						<Top>
							<img src={logo} alt="logo" />
						</Top>
						<Body>
							<h2>**DECLARAÇÃO**</h2>

							<p>{`Declaramos para os devidos fins que se fizerem necessários que ${declarationDataInput.nome.toUpperCase()}, portador(a) do CPF nº ${mCPF(
								declarationDataInput.cpf
							)}, estudou ${declarationDataInput.idioma.toUpperCase()} de ${
								declarationDataInput.inicio
							} a ${declarationDataInput.final} com um total de ${
								declarationDataInput.horas
							} horas, com ${declarationDataInput.pontos} pontos e ${
								declarationDataInput.presença
							}% de frequência.`}</p>
						</Body>
						<Assign>
							<p>Sem mais para o momento,</p>
							<p>Atenciosamente,</p>
							<p>__________________________________________</p>
							<p>Rocha Centro de Idiomas LTDA</p>
							<p>CNPJ 09.586.161/0001-83</p>
						</Assign>
					</ContainerReceipt>
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

const Body = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	h2 {
		margin: 0 auto;
		font-size: 30px;
		font-weight: bold;
		margin-top: 40px;
	}

	h3 {
		text-align: right;
		font-size: 20px;
		font-weight: bold;
		margin: 40px 40px 40px 0;
	}

	p {
		margin: 10px 0 0 40px;
		text-align: left;
		font-size: 20px;
	}
`;

const Assign = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: 90px 40px 0 0;

	p {
		margin: 5px 0 0 0;
	}

	p:nth-child(2) {
		margin-bottom: 30px;
	}
`;

const ContainerReceipt = styled.div`
	width: 100%;
	height: 85%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
	overflow: auto;
	padding: 10px;
`;

const Top = styled.span`
	display: flex;

	img {
		height: 90px;
		margin: 0 10px 0 40px;
	}

	p {
		font-size: 18px;
	}
`;
