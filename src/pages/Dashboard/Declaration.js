import { useState, useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "./Index";
import DeclarationScreen from "../../layouts/Declaration/DeclarationScreen";
import { getToken } from "../../shared/getToken";

export default function Declaration() {
	const [declarationDataInput, setDeclarationDataInput] = useState({
		nome: "",
		cpf: "",
		inicio: "",
		final: "",
		presença: "",
		pontos: "",
		horas: "",
		idioma: "",
	});
	const navigate = useNavigate();
	const componentRef = useRef();

	function handleDeclarationForm(e) {
		let data = { ...declarationDataInput };
		data[e.target.name] = e.target.value;
		setDeclarationDataInput(data);
	}

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

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
			<DeclarationScreen
				declarationDataInput={declarationDataInput}
				handleDeclarationForm={handleDeclarationForm}
				print={print}
				componentRef={componentRef}
			/>
		</Home>
	);
}
