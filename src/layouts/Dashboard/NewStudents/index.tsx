import styled from "styled-components";

import NewStudentsForm from "./NewStudentsForm";
import { TNewStudentsForm } from "./types";

export default function NewStudent({
	newStudentData,
	setNewStudentData,
	submit,
}: TNewStudentsForm) {
	return (
		<Box>
			<NewStudentsForm
				newStudentData={newStudentData}
				setNewStudentData={setNewStudentData}
				submit={submit}
			/>
		</Box>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;
	margin-left: 5px;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		input {
			width: 100%;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 40px;
			width: 100px;
			margin: 0 auto;
			background-color: #87ceeb;
			font-weight: bold;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}

		p:first-child {
			text-align: center;
			font-weight: bold;
		}

		p {
			font-weight: bold;
			margin-bottom: 15px;
		}
	}
`;
