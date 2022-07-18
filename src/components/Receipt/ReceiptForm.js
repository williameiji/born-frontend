export default function ReceiptForm({
	receiptDataInput,
	handleReceiptForm,
	print,
}) {
	return (
		<>
			<form>
				<input
					type="text"
					name="nome"
					placeholder="Nome"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.nome}
				></input>
				<input
					type="text"
					name="cpf"
					placeholder="CPF/RG"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.cpf}
				></input>
				<input
					type="text"
					name="valor"
					placeholder="Valor"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.valor}
				></input>
				<input
					type="text"
					name="ref"
					placeholder="Referente"
					onChange={(e) => handleReceiptForm(e)}
					value={receiptDataInput.ref}
				></input>
				<button onClick={print}>Imprimir</button>
			</form>
		</>
	);
}
