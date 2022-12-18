import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import ReceiptScreen from "../../layouts/Dashboard/Receipt";
import { getToken } from "../../shared/getToken";

export default function Receipt() {
	const [receiptDataInput, setReceiptDataInput] = useState({
		name: "",
		cpf: "",
		ref: "",
		value: "",
	});
	const navigate = useNavigate();
	const componentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function print() {
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
				setReceiptDataInput={setReceiptDataInput}
				print={print}
				componentRef={componentRef}
			/>
		</Home>
	);
}
