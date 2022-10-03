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
						type="text"
						name="nome"
						size="small"
						label="Nome"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.nome}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						type="text"
						name="cpf"
						size="small"
						label="CPF"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.cpf}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<TextField
						type="text"
						name="idioma"
						size="small"
						label="Idioma"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.idioma}
						sx={{ mr: "15px", width: "100%" }}
					/>
					<button type="submit">Imprimir</button>
				</div>
				<div>
					<TextField
						type="text"
						name="inicio"
						size="small"
						label="Data de início"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.inicio}
						sx={{ mr: "15px" }}
					/>
					<TextField
						type="text"
						name="final"
						size="small"
						label="Data final"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.final}
						sx={{ mr: "15px" }}
					/>
					<TextField
						type="text"
						name="horas"
						size="small"
						label="Total em horas"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.horas}
						sx={{ mr: "15px" }}
					/>
					<TextField
						type="text"
						name="pontos"
						size="small"
						label="Pontos"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.pontos}
						sx={{ mr: "15px" }}
					/>
					<TextField
						type="text"
						name="presença"
						size="small"
						label="Frequência"
						onChange={(e) => handleDeclarationForm(e)}
						value={declarationDataInput.presença}
					/>
				</div>
			</form>
		</>
	);
}
