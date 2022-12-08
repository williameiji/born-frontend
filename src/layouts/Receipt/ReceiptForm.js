import InputForms from "../../components/InputForms";
import ButtonForms from "../../components/ButtonForms";

export default function ReceiptForm({
	receiptDataInput,
	handleReceiptForm,
	print,
}) {
	return (
		<>
			<form>
				<InputForms
					cyId="name"
					name="nome"
					label="Nome"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.nome}
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
					name="valor"
					label="Valor"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.valor}
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
