import TextField from "@mui/material/TextField";

export default function ReceiptForm({
	receiptDataInput,
	handleReceiptForm,
	print,
}) {
	return (
		<>
			<form>
				<TextField
					data-cy="name"
					type="text"
					name="nome"
					size="small"
					label="Nome"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.nome}
					sx={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<TextField
					data-cy="cpf"
					type="text"
					name="cpf"
					size="small"
					label="CPF/RG"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.cpf}
					sx={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<TextField
					data-cy="value"
					type="text"
					name="valor"
					size="small"
					label="Valor"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.valor}
					sx={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<TextField
					data-cy="reference"
					type="text"
					name="ref"
					size="small"
					label="Referente"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.ref}
					sx={{ mr: "10px", width: "100%", mb: "5px" }}
				/>
				<button onClick={print} data-cy="print">
					Imprimir
				</button>
			</form>
		</>
	);
}
