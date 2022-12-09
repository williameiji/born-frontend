import styled from "styled-components";

import NewStudentsForm from "./NewStudentsForm";

export default function NewStudent({
	signupData,
	handleSignupForm,
	signupNewStudent,
}) {
	return (
		<Box>
			<NewStudentsForm
				signupData={signupData}
				handleSignupForm={handleSignupForm}
				signupNewStudent={signupNewStudent}
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
