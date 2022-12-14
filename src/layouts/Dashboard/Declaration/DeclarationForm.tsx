import styled from "styled-components";

import InputForms from "../../../components/InputForms";
import * as types from "./types";

export default function DeclarationForm({
	declarationDataInput,
	handleDeclarationForm,
	print,
}: types.TDeclaration) {
	return (
		<>
			<form onSubmit={print}>
				<div>
					<InputForms
						cyId="name"
						name="nome"
						label="Nome"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.nome}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="cpf"
						name="cpf"
						label="CPF"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.cpf}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="language"
						name="idioma"
						label="Idioma"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.idioma}
						css={{ mr: "15px", width: "100%" }}
					/>
					<Button type="submit" cyId="print">
						IMPRIMIR
					</Button>
				</div>
				<div>
					<InputForms
						cyId="startDate"
						name="inicio"
						label="Data de início"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.inicio}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="endDate"
						name="final"
						label="Data final"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.final}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="hour"
						name="horas"
						label="Total em horas"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.horas}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="score"
						name="pontos"
						label="Pontos"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.pontos}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="frequency"
						name="presença"
						label="Frequência"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.presença}
						css={{ width: "100%" }}
					/>
				</div>
				<ButtonMobile type="submit" cyId="print">
					Imprimir
				</ButtonMobile>
			</form>
		</>
	);
}

const Button = styled.button<{
	children: string;
	type: "submit";
	cyId: string;
}>`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		display: none;
	}
`;

const ButtonMobile = styled.button<{
	children: string;
	type: "submit";
	cyId: string;
}>`
	display: none;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	@media (max-width: 1000px) {
		display: flex;
	}
`;
