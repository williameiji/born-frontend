import { TextField, Button } from "@mui/material";

import AsynchronousInput from "./AsynchronousInput";

export default function PaymentForm({
	paymentDataInput,
	setPaymentDataInput,
	submitPayment,
}) {
	function getStudentInformation(e) {
		setPaymentDataInput({ ...paymentDataInput, name: e.name, id: e._id });
	}

	function handlePaymentForm(e) {
		let data = { ...paymentDataInput };
		data[e.target.name] = e.target.value;
		setPaymentDataInput(data);
	}

	return (
		<>
			<form onSubmit={submitPayment}>
				<p>Lançamento de pagamentos</p>

				<TextField
					data-cy="date"
					name="date"
					label="Data do pagamento"
					variant="outlined"
					size="small"
					value={paymentDataInput.date}
					sx={{ height: "30px", width: "100%", mb: "25px" }}
					required
				/>

				<AsynchronousInput getStudentInformation={getStudentInformation} />

				<TextField
					data-cy="value"
					name="value"
					label="Valor"
					variant="outlined"
					size="small"
					onChange={(e) => handlePaymentForm(e)}
					sx={{ height: "30px", width: "100%", mb: "25px", mt: "20px" }}
					required
				/>

				<TextField
					data-cy="reference"
					name="reference"
					label="Referente a"
					variant="outlined"
					size="small"
					onChange={(e) => handlePaymentForm(e)}
					sx={{ height: "30px", width: "100%", mb: "25px" }}
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
		</>
	);
}
