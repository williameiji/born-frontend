import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function NewStudentsForm({
	signupData,
	handleSignupForm,
	signupNewStudent,
}) {
	return (
		<>
			<form onSubmit={signupNewStudent}>
				<p>CADASTRO</p>
				<TextField
					type="text"
					name="date"
					size="small"
					label="Data de início"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.date}
					sx={{ mb: "15px" }}
					required
				/>
				<TextField
					type="text"
					label="Valor da Mensalidade"
					name="value"
					size="small"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.value}
					sx={{ mb: "15px" }}
					required
				/>
				<p>Dados do aluno:</p>
				<TextField
					type="text"
					name="name"
					size="small"
					label="Nome do aluno"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.name}
					sx={{ mb: "15px" }}
					required
				/>
				<Box>
					<TextField
						type="text"
						name="cpfStudent"
						label="CPF"
						size="small"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.cpfStudent}
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						required
					/>
					<TextField
						type="text"
						name="rgStudent"
						label="RG"
						size="small"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.rgStudent}
						sx={{ mb: "15px", width: "100%" }}
					/>
				</Box>
				<p>Caso menor:</p>
				<TextField
					type="text"
					name="nameResp"
					size="small"
					label="Nome do responsável"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.nameResp}
					sx={{ mb: "15px" }}
				/>
				<Box>
					<TextField
						type="text"
						name="cpfResp"
						size="small"
						label="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.cpfResp}
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<TextField
						type="text"
						name="rgResp"
						size="small"
						label="RG"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.rgResp}
						sx={{ mb: "15px", width: "100%" }}
					/>
				</Box>
				<p>Dados de localização:</p>
				<Box>
					<TextField
						type="text"
						name="adress"
						size="small"
						label="Endereço"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.adress}
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<TextField
						type="text"
						name="number"
						size="small"
						label="Nº"
						onChange={(e) => handleSignupForm(e)}
						value={signupData.number}
						sx={{ mb: "15px" }}
					/>
				</Box>
				<TextField
					type="text"
					size="small"
					name="district"
					label="Bairro"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.district}
					sx={{ mb: "15px" }}
				/>
				<TextField
					type="text"
					name="city"
					size="small"
					label="Cidade"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.city}
					sx={{ mb: "15px" }}
				/>
				<TextField
					type="text"
					name="phone"
					size="small"
					label="Telefone"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.phone}
					sx={{ mb: "15px" }}
				/>
				<TextField
					type="text"
					name="email"
					size="small"
					label="E-mail"
					onChange={(e) => handleSignupForm(e)}
					value={signupData.email}
					sx={{ mb: "15px" }}
				/>
				<button type="submit">Cadastrar</button>
			</form>
		</>
	);
}

const Box = styled.span`
	display: flex;
	flex-direction: row;
`;
