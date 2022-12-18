import styled from "styled-components";

import InputForms from "../../../components/InputForms";
import { TNewStudentsForm } from "./types";

export default function NewStudentsForm({
	newStudentData,
	setNewStudentData,
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
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							date: e.target.value,
						})
					}
					value={newStudentData.date}
					css={{ mb: "15px" }}
					required
				/>
				<InputForms
					cyId="value"
					label="Valor da Mensalidade"
					name="value"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							value: e.target.value,
						})
					}
					value={newStudentData.value}
					css={{ mb: "15px" }}
					required
				/>
				<p>Dados do aluno:</p>
				<InputForms
					cyId="name"
					name="name"
					label="Nome do aluno"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							name: e.target.value,
						})
					}
					value={newStudentData.name}
					css={{ mb: "15px" }}
					required
				/>
				<Box>
					<InputForms
						cyId="cpfStudent"
						name="cpfStudent"
						label="CPF"
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								cpfStudent: e.target.value,
							})
						}
						value={newStudentData.cpfStudent}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						required
					/>
					<InputForms
						cyId="rgStudent"
						name="rgStudent"
						label="RG"
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								rgStudent: e.target.value,
							})
						}
						value={newStudentData.rgStudent}
						css={{ mb: "15px", width: "100%" }}
					/>
				</Box>
				<p>Caso menor:</p>
				<InputForms
					cyId="nameResp"
					name="nameResp"
					label="Nome do responsável"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							nameResp: e.target.value,
						})
					}
					value={newStudentData.nameResp}
					css={{ mb: "15px" }}
				/>
				<Box>
					<InputForms
						cyId="cpfResp"
						name="cpfResp"
						label="CPF"
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								cpfResp: e.target.value,
							})
						}
						value={newStudentData.cpfResp}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<InputForms
						cyId="rgResp"
						name="rgResp"
						label="RG"
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								rgResp: e.target.value,
							})
						}
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
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								adress: e.target.value,
							})
						}
						value={newStudentData.adress}
						css={{ mb: "15px", mr: "20px", width: "100%" }}
					/>
					<InputForms
						cyId="number"
						name="number"
						label="Nº"
						onChange={(e) =>
							setNewStudentData({
								...newStudentData,
								number: e.target.value,
							})
						}
						value={newStudentData.number}
						css={{ mb: "15px" }}
					/>
				</Box>
				<InputForms
					cyId="district"
					name="district"
					label="Bairro"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							district: e.target.value,
						})
					}
					value={newStudentData.district}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="city"
					name="city"
					label="Cidade"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							city: e.target.value,
						})
					}
					value={newStudentData.city}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="phone"
					name="phone"
					label="Telefone"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							phone: e.target.value,
						})
					}
					value={newStudentData.phone}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="email"
					name="email"
					label="E-mail"
					onChange={(e) =>
						setNewStudentData({
							...newStudentData,
							email: e.target.value,
						})
					}
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
