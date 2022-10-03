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
					type="text"
					name="nome"
					size="small"
					label="Nome"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.nome}
					sx={{ mr: "15px" }}
				/>
				<TextField
					type="text"
					name="cpf"
					size="small"
					label="CPF/RG"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.cpf}
					sx={{ mr: "15px" }}
				/>
				<TextField
					type="text"
					name="valor"
					size="small"
					label="Valor"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.valor}
					sx={{ mr: "15px" }}
				/>
				<TextField
					type="text"
					name="ref"
					size="small"
					label="Referente"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.ref}
					sx={{ mr: "15px" }}
				/>
				<button onClick={print}>Imprimir</button>
			</form>
		</>
	);
}
