import TextField from "@mui/material/TextField";

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
					<button type="submit" data-cy="print">
						Imprimir
					</button>
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
			</form>
		</>
	);
}
