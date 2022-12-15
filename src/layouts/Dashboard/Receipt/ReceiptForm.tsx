import InputForms from "../../../components/InputForms";
import ButtonForms from "../../../components/ButtonForms";

import { TReceipt } from "./types";

export default function ReceiptForm({
	receiptDataInput,
	handleReceiptForm,
	print,
}: TReceipt) {
	return (
		<>
			<form>
				<InputForms
					cyId="name"
					name="name"
					label="Nome"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.name}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<InputForms
					cyId="cpf"
					name="cpf"
					label="CPF/RG"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.cpf}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<InputForms
					cyId="value"
					name="value"
					label="Valor"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.value}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<InputForms
					cyId="reference"
					name="ref"
					label="Referente"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.ref}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<ButtonForms onClick={print} text="Imprimir" data-cy="print" />
			</form>
		</>
	);
}
