import styled from "styled-components";
import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Home from "../Home/Home";
import ReceiptForm from "./ReceiptForm";
import { ReceiptBody } from "./ReceiptBody";
import UserContext from "../Contexts/UserContext";

export default function Receipt() {
	const [receiptDataInput, setReceiptDataInput] = useState({
		nome: "",
		cpf: "",
		ref: "",
		valor: "",
	});
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);
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
		if (userData) {
			handlePrint();
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	return (
		<Home>
			<Box>
				<ReceiptForm
					receiptDataInput={receiptDataInput}
					handleReceiptForm={handleReceiptForm}
					print={print}
				/>
				<ReceiptBody ref={componentRef} receiptDataInput={receiptDataInput} />
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 75vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	form {
		display: flex;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 30px;
			text-align: center;
			margin-right: 10px;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 100px;
			margin-left: 10px;
			background-color: #87ceeb;
		}
	}
`;
