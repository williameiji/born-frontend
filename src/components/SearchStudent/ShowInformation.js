import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";

export default function ShowInformation({ renderFinds, setEditInformation }) {
	const params = useParams();
	const navigate = useNavigate();

	function mCPF(cpf) {
		cpf = cpf.replace(/\D/g, "");
		cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
		cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
		cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		return cpf;
	}

	function editPage() {
		setEditInformation(renderFinds[params.id]);
		navigate("/edit");
	}

	return (
		<Home>
			<Box>
				{renderFinds.length ? (
					<>
						<p>Data de início: {renderFinds[params.id].date}</p>
						<p>
							Valor da mensalidade: R$
							{parseInt(renderFinds[params.id].value)
								.toFixed(2)
								.replace(".", ",")}
						</p>
						<p>Nome do aluno: {renderFinds[params.id].name}</p>
						<p>CPF: {mCPF(renderFinds[params.id].cpfStudent)}</p>
						<p>RG: {renderFinds[params.id].rgStudent}</p>
						<p>Nome do responsável: {renderFinds[params.id].nameResp}</p>
						<p>CPF: {mCPF(renderFinds[params.id].cpfResp)}</p>
						<p>RG: {renderFinds[params.id].rgResp}</p>
						<p>Endereço: {renderFinds[params.id].adress}</p>
						<p>Número: {renderFinds[params.id].number}</p>
						<p>Bairro: {renderFinds[params.id].district}</p>
						<p>Cidade: {renderFinds[params.id].city}</p>
						<p>Telefone: {renderFinds[params.id].phone}</p>
						<p>E-mail: {renderFinds[params.id].email}</p>
						<button onClick={editPage}>Editar informações</button>
					</>
				) : (
					"Sem informação"
				)}
			</Box>
		</Home>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	height: 75vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	p {
		width: 100%;
		border: 1px solid gray;
		margin-bottom: 8px;
		font-size: 18px;
		padding: 3px;
	}

	button {
		border: none;
		border-radius: 5px;
		height: 40px;
		padding: 10px;
		background-color: #87ceeb;
	}
`;
