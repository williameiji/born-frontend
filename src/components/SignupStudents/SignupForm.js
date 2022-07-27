import styled from "styled-components";

export default function SignupForm({
	signupData,
	handleSignupForm,
	signupNewStudent,
}) {
	return (
		<>
			<Forms onSubmit={signupNewStudent}>
				<p>CADASTRO</p>
				<input
					type="text"
					name="date"
					placeholder="Data de início"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.date}
					required
				></input>
				<input
					type="text"
					placeholder="Valor da Mensalidade"
					name="value"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.value}
					required
				></input>
				<p>Dados do aluno:</p>
				<input
					type="text"
					name="name"
					placeholder="Nome do aluno"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.name}
					required
				></input>
				<BoxData>
					<input
						type="text"
						name="cpfStudent"
						placeholder="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.cpfStudent}
					></input>
					<input
						type="text"
						name="rgStudent"
						placeholder="RG"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.rgStudent}
					></input>
				</BoxData>
				<p>Caso menor:</p>
				<input
					type="text"
					name="nameResp"
					placeholder="Nome do responsável"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.nameResp}
				></input>
				<BoxData>
					<input
						type="text"
						name="cpfResp"
						placeholder="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.cpfResp}
					></input>
					<input
						type="text"
						name="rgResp"
						placeholder="RG"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.rgResp}
					></input>
				</BoxData>
				<p>Dados de localização:</p>
				<BoxAdress>
					<input
						type="text"
						name="adress"
						placeholder="Endereço"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.adress}
					></input>
					<input
						type="text"
						name="number"
						placeholder="Nº"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.number}
					></input>
				</BoxAdress>
				<input
					type="text"
					name="district"
					placeholder="Bairro"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.district}
				></input>
				<input
					type="text"
					name="city"
					placeholder="Cidade"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.city}
				></input>
				<input
					type="text"
					name="phone"
					placeholder="Telefone"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.phone}
				></input>
				<input
					type="text"
					name="email"
					placeholder="E-mail"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.email}
				></input>
				<button type="submit">Cadastrar</button>
			</Forms>
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

const Forms = styled.form`
	p:first-child {
		text-align: center;
		margin-bottom: 10px;
		font-weight: bold;
	}

	p {
		font-weight: bold;
	}
`;
