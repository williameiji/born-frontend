import styled from "styled-components";

import InputForms from "../../../components/InputForms";
import * as types from "./types";

export default function EditStudentForm({
	editInformation,
	setEditInformation,
	submit,
}: types.TEditStudentForm) {
	return (
		<>
			<form onSubmit={submit}>
				<p>CADASTRO</p>
				<InputForms
					cyId="date"
					name="date"
					css={{ mb: "15px" }}
					label="Data de início"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							date: e.target.value,
						})
					}
					value={editInformation.date}
					required
				/>
				<InputForms
					cyId="value"
					css={{ mb: "15px" }}
					label="Valor da Mensalidade"
					name="value"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							value: e.target.value,
						})
					}
					value={editInformation?.value}
					required
				/>
				<p>Dados do aluno:</p>
				<InputForms
					cyId="name"
					name="name"
					css={{ mb: "15px" }}
					label="Nome do aluno"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							name: e.target.value,
						})
					}
					value={editInformation?.name}
					required
				/>
				<Box>
					<InputForms
						cyId="cpfStudent"
						name="cpfStudent"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								cpfStudent: e.target.value,
							})
						}
						value={editInformation?.cpfStudent}
					/>
					<InputForms
						cyId="rgStudent"
						name="rgStudent"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="RG"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								rgStudent: e.target.value,
							})
						}
						value={editInformation?.rgStudent}
					/>
				</Box>
				<p>Caso menor:</p>
				<InputForms
					cyId="nameResp"
					name="nameResp"
					css={{ mb: "15px" }}
					label="Nome do responsável"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							nameResp: e.target.value,
						})
					}
					value={editInformation?.nameResp}
				/>
				<Box>
					<InputForms
						cyId="cpfResp"
						name="cpfResp"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="CPF"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								cpfResp: e.target.value,
							})
						}
						value={editInformation?.cpfResp}
					/>
					<InputForms
						cyId="rgResp"
						name="rgResp"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="RG"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								rgResp: e.target.value,
							})
						}
						value={editInformation?.rgResp}
					/>
				</Box>
				<p>Dados de localização:</p>
				<Box>
					<InputForms
						cyId="adress"
						name="adress"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="Endereço"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								adress: e.target.value,
							})
						}
						value={editInformation?.adress}
					/>
					<InputForms
						cyId="number"
						name="number"
						css={{ mb: "15px", mr: "20px", width: "100%" }}
						label="Nº"
						onChange={(e) =>
							setEditInformation({
								...editInformation,
								number: e.target.value,
							})
						}
						value={editInformation?.number}
					/>
				</Box>
				<InputForms
					cyId="district"
					name="district"
					css={{ mb: "15px" }}
					label="Bairro"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							district: e.target.value,
						})
					}
					value={editInformation?.district}
				/>
				<InputForms
					cyId="city"
					name="city"
					css={{ mb: "15px" }}
					label="Cidade"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							city: e.target.value,
						})
					}
					value={editInformation?.city}
				/>
				<InputForms
					cyId="phone"
					name="phone"
					css={{ mb: "15px" }}
					label="Telefone"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							phone: e.target.value,
						})
					}
					value={editInformation?.phone}
				/>
				<InputForms
					cyId="email"
					name="email"
					css={{ mb: "15px" }}
					label="E-mail"
					onChange={(e) =>
						setEditInformation({
							...editInformation,
							email: e.target.value,
						})
					}
					value={editInformation?.email}
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
