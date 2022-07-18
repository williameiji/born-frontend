import printHere from "../Shared/printHere.js";

export default function DeclarationForm({
	declarationDataInput,
	handleDeclarationForm,
}) {
	return (
		<>
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
		</>
	);
}
