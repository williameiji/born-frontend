import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import DeclarationScreen from "../../layouts/Dashboard/Declaration";
import { getToken } from "../../shared/getToken";

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
	const navigate = useNavigate();
	const componentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function print(e: any) {
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
			<DeclarationScreen
				declarationDataInput={declarationDataInput}
				setDeclarationDataInput={setDeclarationDataInput}
				print={print}
				componentRef={componentRef}
			/>
		</Home>
	);
}
