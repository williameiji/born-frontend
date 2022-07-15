import styled from "styled-components";

import Home from "../components/Home/Home";

export default function SignupStudents() {
	return (
		<Home>
			<Box>
				<form>
					<p>CADASTRO</p>
					<input type="text" placeholder="Início" required></input>
					<input
						type="text"
						placeholder="Valor da Mensalidade"
						required
					></input>
					<p>Dados do aluno:</p>
					<input type="text" placeholder="Nome do aluno" required></input>
					<input type="text" placeholder="CPF"></input>
					<input type="text" placeholder="RG"></input>
					<p>Caso menor:</p>
					<input type="text" placeholder="Nome do responsável" required></input>
					<input type="text" placeholder="CPF"></input>
					<input type="text" placeholder="RG"></input>
					<p>Dados de localização:</p>
					<input type="text" placeholder="Endereço"></input>
					<input type="text" placeholder="Nº"></input>
					<input type="text" placeholder="Bairro"></input>
					<input type="text" placeholder="Cidade"></input>
					<input type="text" placeholder="Telefone"></input>
					<input type="text" placeholder="E-mail"></input>
					<button type="submit">Cadastrar</button>
				</form>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 80vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;

	form {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 30px;
			text-align: center;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
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
