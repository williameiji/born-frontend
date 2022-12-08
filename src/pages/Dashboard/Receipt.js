import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import ReceiptScreen from "../../layouts/Receipt/ReceiptScreen";
import { getToken } from "../../shared/getToken";

export default function Receipt() {
	const [receiptDataInput, setReceiptDataInput] = useState({
		nome: "",
		cpf: "",
		ref: "",
		valor: "",
	});
	const navigate = useNavigate();
	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function handleReceiptForm(e) {
		let data = { ...receiptDataInput };
		data[e.target.name] = e.target.value;
		setReceiptDataInput(data);
	}

	function print(e) {
		e.preventDefault();
		if (getToken()) {
			handlePrint();
		} else {
			alert("Você precisa estar logado!");
			navigate("/login");
		}
	}

	return (
		<Home>
			<ReceiptScreen
				receiptDataInput={receiptDataInput}
				handleReceiptForm={handleReceiptForm}
				print={print}
				componentRef={componentRef}
			/>
		</Home>
	);
}
