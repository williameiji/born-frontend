import styled from "styled-components";

import InputForms from "../../../components/InputForms";
import { TNewStudentsForm } from "./types";

export default function NewStudentsForm({
	newStudentData,
	handleNewStudent,
	submit,
}: TNewStudentsForm) {
	return (
		<>
			<form onSubmit={submit}>
				<p>CADASTRO</p>
				<InputForms
					cyId="date"
					name="date"
					label="Data de início"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.date}
					css={{ mb: "15px" }}
					required
				/>
				<InputForms
					cyId="value"
					label="Valor da Mensalidade"
					name="value"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.value}
					css={{ mb: "15px" }}
					required
				/>
				<p>Dados do aluno:</p>
				<InputForms
					cyId="name"
					name="name"
					label="Nome do aluno"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.name}
					css={{ mb: "15px" }}
					required
				/>
				<Box>
					<InputForms
						cyId="cpfStudent"
						name="cpfStudent"
						label="CPF"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.cpfStudent}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						required
					/>
					<InputForms
						cyId="rgStudent"
						name="rgStudent"
						label="RG"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.rgStudent}
						css={{ mb: "15px", width: "100%" }}
					/>
				</Box>
				<p>Caso menor:</p>
				<InputForms
					cyId="nameResp"
					name="nameResp"
					label="Nome do responsável"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.nameResp}
					css={{ mb: "15px" }}
				/>
				<Box>
					<InputForms
						cyId="cpfResp"
						name="cpfResp"
						label="CPF"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.cpfResp}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<InputForms
						cyId="rgResp"
						name="rgResp"
						label="RG"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.rgResp}
						css={{ mb: "15px", width: "100%" }}
					/>
				</Box>
				<p>Dados de localização:</p>
				<Box>
					<InputForms
						cyId="adress"
						name="adress"
						label="Endereço"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.adress}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<InputForms
						cyId="number"
						name="number"
						label="Nº"
						onChange={(e) => handleNewStudent(e)}
						value={newStudentData.number}
						css={{ mb: "15px" }}
					/>
				</Box>
				<InputForms
					cyId="district"
					name="district"
					label="Bairro"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.district}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="city"
					name="city"
					label="Cidade"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.city}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="phone"
					name="phone"
					label="Telefone"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.phone}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="email"
					name="email"
					label="E-mail"
					onChange={(e) => handleNewStudent(e)}
					value={newStudentData.email}
					css={{ mb: "15px" }}
				/>
				<button type="submit" data-cy="send">
					Cadastrar
				</button>
			</form>
		</>
	);
}

const Box = styled.span`
	display: flex;
	flex-direction: row;
`;
