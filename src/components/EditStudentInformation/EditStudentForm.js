import styled from "styled-components";

export default function EditStudentForm({
	editInformation,
	handleSignupForm,
	editStudentInfo,
}) {
	return (
		<>
			<form onSubmit={editStudentInfo}>
				<p>CADASTRO</p>
				<input
					type="text"
					name="date"
					placeholder="Data de início"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.date}
					required
				></input>
				<input
					type="text"
					placeholder="Valor da Mensalidade"
					name="value"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.value}
					required
				></input>
				<p>Dados do aluno:</p>
				<input
					type="text"
					name="name"
					placeholder="Nome do aluno"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.name}
					required
				></input>
				<BoxData>
					<input
						type="text"
						name="cpfStudent"
						placeholder="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfStudent}
					></input>
					<input
						type="text"
						name="rgStudent"
						placeholder="RG"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.rgStudent}
					></input>
				</BoxData>
				<p>Caso menor:</p>
				<input
					type="text"
					name="nameResp"
					placeholder="Nome do responsável"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.nameResp}
				></input>
				<BoxData>
					<input
						type="text"
						name="cpfResp"
						placeholder="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfResp}
					></input>
					<input
						type="text"
						name="rgResp"
						placeholder="RG"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.rgResp}
					></input>
				</BoxData>
				<p>Dados de localização:</p>
				<BoxAdress>
					<input
						type="text"
						name="adress"
						placeholder="Endereço"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.adress}
					></input>
					<input
						type="text"
						name="number"
						placeholder="Nº"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.number}
					></input>
				</BoxAdress>
				<input
					type="text"
					name="district"
					placeholder="Bairro"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.district}
				></input>
				<input
					type="text"
					name="city"
					placeholder="Cidade"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.city}
				></input>
				<input
					type="text"
					name="phone"
					placeholder="Telefone"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.phone}
				></input>
				<input
					type="text"
					name="email"
					placeholder="E-mail"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.email}
				></input>
				<button type="submit">Editar</button>
			</form>
		</>
	);
}

const BoxAdress = styled.span`
	display: flex;
	flex-direction: row;

	input:first-child {
		margin-right: 10px;
	}

	input:last-child {
		width: 30%;
	}
`;

const BoxData = styled.span`
	display: flex;
	flex-direction: row;

	input:first-child {
		margin-right: 10px;
	}
`;
