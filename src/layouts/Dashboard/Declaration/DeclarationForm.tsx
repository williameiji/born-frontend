import styled from "styled-components";

import InputForms from "../../../components/InputForms";
import * as types from "./types";

export default function DeclarationForm({
	declarationDataInput,
	setDeclarationDataInput,
	print,
}: types.TDeclaration) {
	return (
		<>
			<form onSubmit={print}>
				<div>
					<InputForms
						cyId="name"
						name="name"
						label="Nome"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								name: e.target.value,
							})
						}
						value={declarationDataInput.name}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="cpf"
						name="cpf"
						label="CPF"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								cpf: e.target.value,
							})
						}
						value={declarationDataInput.cpf}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="language"
						name="language"
						label="Idioma"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								language: e.target.value,
							})
						}
						value={declarationDataInput.language}
						css={{ mr: "15px", width: "100%" }}
					/>
					<Button type="submit" cyId="print">
						IMPRIMIR
					</Button>
				</div>
				<div>
					<InputForms
						cyId="startDate"
						name="startDate"
						label="Data de início"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								startDate: e.target.value,
							})
						}
						value={declarationDataInput.startDate}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="endDate"
						name="endDate"
						label="Data final"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								endDate: e.target.value,
							})
						}
						value={declarationDataInput.endDate}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="hours"
						name="hours"
						label="Total em horas"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								hours: e.target.value,
							})
						}
						value={declarationDataInput.hours}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="score"
						name="score"
						label="Pontos"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								score: e.target.value,
							})
						}
						value={declarationDataInput.score}
						css={{ mr: "15px", width: "100%" }}
					/>
					<InputForms
						cyId="frequency"
						name="frequency"
						label="Frequência"
						onChange={(e) =>
							setDeclarationDataInput({
								...declarationDataInput,
								frequency: e.target.value,
							})
						}
						value={declarationDataInput.frequency}
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
