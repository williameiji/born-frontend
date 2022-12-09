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
					data-cy="date"
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
					data-cy="value"
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
					data-cy="name"
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
						data-cy="cpfStudent"
						type="text"
						name="cpfStudent"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfStudent}
					/>
					<TextField
						data-cy="rgStudent"
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
					data-cy="nameResp"
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
						data-cy="cpfResp"
						type="text"
						name="cpfResp"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.cpfResp}
					/>
					<TextField
						data-cy="rgResp"
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
						data-cy="adress"
						type="text"
						name="adress"
						size="small"
						sx={{ mb: "15px", mr: "20px", width: "100%" }}
						label="Endereço"
						onChange={(e) => handleSignupForm(e)}
						value={editInformation.adress}
					/>
					<TextField
						data-cy="number"
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
					data-cy="district"
					type="text"
					name="district"
					size="small"
					sx={{ mb: "15px" }}
					label="Bairro"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.district}
				/>
				<TextField
					data-cy="city"
					type="text"
					name="city"
					size="small"
					sx={{ mb: "15px" }}
					label="Cidade"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.city}
				/>
				<TextField
					data-cy="phone"
					type="text"
					name="phone"
					size="small"
					sx={{ mb: "15px" }}
					label="Telefone"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.phone}
				/>
				<TextField
					data-cy="email"
					type="text"
					name="email"
					size="small"
					sx={{ mb: "15px" }}
					label="E-mail"
					onChange={(e) => handleSignupForm(e)}
					value={editInformation.email}
				/>
				<button type="submit" data-cy="send">
					Editar
				</button>
			</form>
		</>
	);
}

const Box = styled.span`
	display: flex;
	flex-direction: row;
`;
