import styled from "styled-components";

import ReceiptForm from "./ReceiptForm";
import { ReceiptBody } from "./ReceiptBody";
import { TReceipt } from "./types";

export default function ReceiptScreen({
	receiptDataInput,
	setReceiptDataInput,
	handlePrint,
	componentRef,
}: TReceipt) {
	return (
		<Box>
			<ReceiptForm
				receiptDataInput={receiptDataInput}
				setReceiptDataInput={setReceiptDataInput}
				handlePrint={handlePrint}
			/>
			<ReceiptBody ref={componentRef} receiptDataInput={receiptDataInput} />
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
		padding: 20px;

		@media (max-width: 1000px) {
			flex-wrap: wrap;
			padding: 0;
			justify-content: center;
			padding: 20px 0 20px 10px;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 38px;
			min-width: 80px;
			padding: 0 3px !important;
			margin-left: 10px;
			background-color: #87ceeb;
			font-weight: bold;

			@media (max-width: 1000px) {
				margin-top: 5px;
			}

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;
