import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";

import Home from "../Home/Home";
import mCPF from "../Shared/mCPF";
import DeleteModal from "./DeleteModal";

export default function ShowInformation({ renderFinds, setEditInformation }) {
	const params = useParams();
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	function editPage() {
		setEditInformation(renderFinds[params.id]);
		navigate("/edit");
	}

	function deleteStudent() {
		setIsModalOpen(true);
	}

	return (
		<Home>
			<DeleteModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				student={renderFinds[params.id]}
			/>
			<Box>
				{renderFinds.length ? (
					<div>
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
						<div>
							<Button
								variant="contained"
								onClick={editPage}
								sx={{ backgroundColor: "#87ceeb", color: "black" }}
							>
								Editar informações
							</Button>

							<Button onClick={deleteStudent} sx={{ color: "red" }}>
								Remover aluno
							</Button>
						</div>
					</div>
				) : (
					"Sem informação"
				)}
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	@media (max-width: 480px) {
		margin: 0;
		height: 100%;
	}

	div {
		width: 100%;
		height: 100%;

		@media (max-width: 480px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		p {
			width: 100%;
			margin-bottom: 8px;
			font-size: 18px;
			padding: 5px;
			border-radius: 5px;
			background-color: #eeeeee;
		}

		:first-child button {
			margin: 20px 20px 0 0;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 40px;
			padding: 10px;
			font-weight: bold;
			margin: 0 auto 5px auto;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;
