import { useParams, useNavigate, Params } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";

import mCPF from "../../../shared/mCPF";
import DeleteModal from "./DeleteModal";
import { TShowInformation } from "./types";

export default function ShowInformation({
	renderFinds,
	setEditInformation,
	setRenderFinds,
}: TShowInformation) {
	const { id }: Readonly<Params<string>> = useParams();
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	function editPage() {
		setEditInformation(renderFinds[Number(id)]);
		navigate("/edit");
	}

	function deleteStudent() {
		setIsModalOpen(true);
	}

	return (
		<>
			<DeleteModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				student={renderFinds[Number(id)]}
				setRenderFinds={setRenderFinds}
			/>
			<Box>
				{renderFinds.length ? (
					<div>
						<p>Data de início: {renderFinds[Number(id)].date}</p>
						<p>
							Valor da mensalidade: R$
							{parseInt(renderFinds[Number(id)].value)
								.toFixed(2)
								.replace(".", ",")}
						</p>
						<p>Nome do aluno: {renderFinds[Number(id)].name}</p>
						<p>CPF: {mCPF(renderFinds[Number(id)].cpfStudent)}</p>
						<p>RG: {renderFinds[Number(id)].rgStudent}</p>
						<p>Nome do responsável: {renderFinds[Number(id)].nameResp}</p>
						<p>CPF: {mCPF(renderFinds[Number(id)].cpfResp)}</p>
						<p>RG: {renderFinds[Number(id)].rgResp}</p>
						<p>Endereço: {renderFinds[Number(id)].adress}</p>
						<p>Número: {renderFinds[Number(id)].number}</p>
						<p>Bairro: {renderFinds[Number(id)].district}</p>
						<p>Cidade: {renderFinds[Number(id)].city}</p>
						<p>Telefone: {renderFinds[Number(id)].phone}</p>
						<p>E-mail: {renderFinds[Number(id)].email}</p>
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
		</>
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
