import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import ReceiptScreen from "../../layouts/Dashboard/Receipt";

export default function Receipt() {
	const [receiptDataInput, setReceiptDataInput] = useState({
		name: "",
		cpf: "",
		ref: "",
		value: "",
	});

	const componentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<Home>
			<ReceiptScreen
				receiptDataInput={receiptDataInput}
				setReceiptDataInput={setReceiptDataInput}
				handlePrint={handlePrint}
				componentRef={componentRef}
			/>
		</Home>
	);
}
