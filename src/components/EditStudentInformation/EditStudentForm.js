import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function EditStudentForm({
	editInformation,
	handleSignupForm,
	editStudentInfo,
}) {
	return (
		<>
			<form onSubmit={editStudentInfo}>
				<p>CADASTRO</p>
				<TextField
					type="text"
					name="date"
					size="small"
					sx={{ mb: "15px" }}
					label="Data de início"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.date}
					required
				/>
				<TextField
					type="text"
					size="small"
					sx={{ mb: "15px" }}
					label="Valor da Mensalidade"
					name="value"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.value}
					required
				/>
				<p>Dados do aluno:</p>
				<TextField
					type="text"
					name="name"
					size="small"
					sx={{ mb: "15px" }}
					label="Nome do aluno"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.name}
					required
				/>
				<Box>
					<TextField
						type="text"
						name="cpfStudent"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfStudent}
					/>
					<TextField
						type="text"
						name="rgStudent"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="RG"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.rgStudent}
					/>
				</Box>
				<p>Caso menor:</p>
				<TextField
					type="text"
					name="nameResp"
					size="small"
					sx={{ mb: "15px" }}
					label="Nome do responsável"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.nameResp}
				/>
				<Box>
					<TextField
						type="text"
						name="cpfResp"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfResp}
					/>
					<TextField
						type="text"
						name="rgResp"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="RG"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.rgResp}
					/>
				</Box>
				<p>Dados de localização:</p>
				<Box>
					<TextField
						type="text"
						name="adress"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="Endereço"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.adress}
					/>
					<TextField
						type="text"
						name="number"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="Nº"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.number}
					/>
				</Box>
				<TextField
					type="text"
					name="district"
					size="small"
					sx={{ mb: "15px" }}
					label="Bairro"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.district}
				/>
				<TextField
					type="text"
					name="city"
					size="small"
					sx={{ mb: "15px" }}
					label="Cidade"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.city}
				/>
				<TextField
					type="text"
					name="phone"
					size="small"
					sx={{ mb: "15px" }}
					label="Telefone"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.phone}
				/>
				<TextField
					type="text"
					name="email"
					size="small"
					sx={{ mb: "15px" }}
					label="E-mail"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.email}
				/>
				<button type="submit">Editar</button>
			</form>
		</>
	);
}

const Box = styled.span`
	display: flex;
	flex-direction: row;
`;
