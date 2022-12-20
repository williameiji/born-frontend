import InputForms from "../../../components/InputForms";
import ButtonForms from "../../../components/ButtonForms";

import { TReceipt } from "./types";

export default function ReceiptForm({
	receiptDataInput,
	setReceiptDataInput,
	handlePrint,
}: TReceipt) {
	return (
		<>
			<form>
				<InputForms
					cyId="name"
					name="name"
					label="Nome"
					onChange={(e) =>
						setReceiptDataInput({
							...receiptDataInput,
							name: e.target.value,
						})
					}
					value={receiptDataInput.name}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<InputForms
					cyId="cpf"
					name="cpf"
					label="CPF/RG"
					onChange={(e) =>
						setReceiptDataInput({
							...receiptDataInput,
							cpf: e.target.value,
						})
					}
					value={receiptDataInput.cpf}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<InputForms
					cyId="value"
					name="value"
					label="Valor"
					onChange={(e) =>
						setReceiptDataInput({
							...receiptDataInput,
							value: e.target.value,
						})
					}
					value={receiptDataInput.value}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<InputForms
					cyId="reference"
					name="ref"
					label="Referente"
					onChange={(e) =>
						setReceiptDataInput({
							...receiptDataInput,
							ref: e.target.value,
						})
					}
					value={receiptDataInput.ref}
					css={{ mr: "10px", width: "100%", mb: "5px" }}
				/>

				<ButtonForms onClick={handlePrint} text="Imprimir" cyId="print" />
			</form>
		</>
	);
}
