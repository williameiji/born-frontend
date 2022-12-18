import styled from "styled-components";
import { Button } from "@mui/material";

import AsynchronousInput from "./AsynchronousInput";
import InputForms from "../../../components/InputForms";
import { TPaymentForm } from "./types";

export default function PaymentForm({
	paymentDataInput,
	submitPayment,
	setPaymentDataInput,
}: TPaymentForm) {
	return (
		<Box>
			<form onSubmit={submitPayment}>
				<p>Lançamento de pagamentos</p>

				<InputForms
					cyId="date"
					name="date"
					label="Data do pagamento"
					variant="outlined"
					value={paymentDataInput.date}
					css={{ height: "30px", width: "100%", mb: "25px" }}
					required
				/>

				<AsynchronousInput
					setPaymentDataInput={setPaymentDataInput}
					paymentDataInput={paymentDataInput}
				/>

				<InputForms
					cyId="value"
					name="value"
					label="Valor"
					variant="outlined"
					onChange={(e) =>
						setPaymentDataInput({
							...paymentDataInput,
							value: e.target.value,
						})
					}
					css={{ height: "30px", width: "100%", mb: "25px", mt: "20px" }}
					required
				/>

				<InputForms
					cyId="reference"
					name="reference"
					label="Referente a"
					variant="outlined"
					onChange={(e) =>
						setPaymentDataInput({
							...paymentDataInput,
							reference: e.target.value,
						})
					}
					css={{ height: "30px", width: "100%", mb: "25px" }}
					required
				/>

				<Button
					variant="outlined"
					size="medium"
					type="submit"
					data-cy="submit"
					sx={{ width: "30%", ml: "auto", mr: "auto" }}
				>
					Lançar pagamento
				</Button>
			</form>
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

		p {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			color: grey;
			margin-bottom: 20px;
		}
	}
`;
