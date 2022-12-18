import styled from "styled-components";
import InputForms from "../../../components/InputForms";
import { TSearchStudent } from "./types";

export default function InitialSearch({
	setSearchDataInput,
	searchByName,
	showStudentInformation,
	renderFinds,
	searchDataInput,
}: TSearchStudent) {
	return (
		<Box>
			<form onSubmit={searchByName}>
				<InputForms
					cyId="name"
					name="name"
					label="Nome do aluno"
					variant="outlined"
					inputValue={searchDataInput.name}
					onChange={(e) =>
						setSearchDataInput({
							...searchDataInput,
							name: e.target.value,
						})
					}
					css={{ height: "30px", width: "100%" }}
				/>
				<button type="submit" data-cy="submit">
					Pesquisar
				</button>
			</form>
			<ContainerStudents data-cy="students">
				{renderFinds.length !== 0 ? (
					renderFinds.map((element, index) => (
						<RenderStudent
							key={index}
							onClick={() => showStudentInformation(index)}
						>
							{element.name}
						</RenderStudent>
					))
				) : (
					<Text>Pesquise um aluno por nome</Text>
				)}
			</ContainerStudents>
		</Box>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		padding: 20px;

		input {
			border-radius: 5px;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 39px;
			width: 100px;
			margin-left: 10px;
			background-color: #87ceeb;
			font-weight: bold;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const Text = styled.p`
	text-align: center;
	color: lightgray;
`;

const ContainerStudents = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
	overflow: auto;
	padding: 10px;
`;

const RenderStudent = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin-bottom: 5px;

	:hover {
		cursor: pointer;
	}
`;
