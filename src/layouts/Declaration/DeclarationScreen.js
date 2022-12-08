import styled from "styled-components";

import DeclarationForm from "./DeclarationForm";
import { DeclarationBody } from "./DeclarationBody";

export default function DeclarationScreen({
	declarationDataInput,
	handleDeclarationForm,
	print,
	componentRef,
}) {
	return (
		<Box>
			<DeclarationForm
				declarationDataInput={declarationDataInput}
				handleDeclarationForm={handleDeclarationForm}
				print={print}
			/>
			<DeclarationBody
				ref={componentRef}
				declarationDataInput={declarationDataInput}
			/>
		</Box>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		div {
			display: flex;
			margin-bottom: 10px;

			@media (max-width: 1000px) {
				flex-wrap: wrap;
				padding: 0;
				justify-content: center;
				margin: 0 0 5px 0;
			}
		}

		button {
			border: none;
			border-radius: 5px;
			height: 38px;
			width: 80px;
			background-color: #87ceeb;
			font-weight: bold;
			padding: 0 8px;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;
