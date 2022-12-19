import { useState, useRef } from "react";

import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import DeclarationScreen from "../../layouts/Dashboard/Declaration";

export default function Declaration() {
	const [declarationDataInput, setDeclarationDataInput] = useState({
		name: "",
		cpf: "",
		startDate: "",
		endDate: "",
		frequency: "",
		score: "",
		hours: "",
		language: "",
	});
	const componentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function print(e: any) {
		e.preventDefault();
		handlePrint();
	}

	return (
		<Home>
			<DeclarationScreen
				declarationDataInput={declarationDataInput}
				setDeclarationDataInput={setDeclarationDataInput}
				print={print}
				componentRef={componentRef}
			/>
		</Home>
	);
}
