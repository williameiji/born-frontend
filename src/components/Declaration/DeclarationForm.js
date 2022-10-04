import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function DeclarationForm({
	declarationDataInput,
	handleDeclarationForm,
	print,
}) {
	return (
		<>
			<form onSubmit={print}>
				<div>
					<TextField
						data-cy="name"
						type="text"
						name="nome"
						size="small"
						label="Nome"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.nome}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="cpf"
						type="text"
						name="cpf"
						size="small"
						label="CPF"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.cpf}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="language"
						type="text"
						name="idioma"
						size="small"
						label="Idioma"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.idioma}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<Button type="submit" data-cy="print">
						Imprimir
					</Button>
				</div>
				<div>
					<TextField
						data-cy="startDate"
						type="text"
						name="inicio"
						size="small"
						label="Data de início"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.inicio}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="endDate"
						type="text"
						name="final"
						size="small"
						label="Data final"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.final}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="hour"
						type="text"
						name="horas"
						size="small"
						label="Total em horas"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.horas}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="score"
						type="text"
						name="pontos"
						size="small"
						label="Pontos"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.pontos}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						data-cy="frequency"
						type="text"
						name="presença"
						size="small"
						label="Frequência"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.presença}
						sx={{ width: "100%" }}
					/>
				</div>
				<ButtonMobile type="submit" data-cy="print">
					Imprimir
				</ButtonMobile>
			</form>
		</>
	);
}

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		display: none;
	}
`;

const ButtonMobile = styled.button`
	display: none;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	@media (max-width: 1000px) {
		display: flex;
	}
`;
