import styled from "styled-components";
import { useState, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import PaymentForm from "./PaymentForm";
import url from "../Services/url";
import UserContext from "../Contexts/UserContext";
import ModalContext from "../Contexts/ModalContext";
import ModalGeneric from "../Shared/ModalGeneric";

export default function PaymentScreen() {
	const [paymentDataInput, setPaymentDataInput] = useState({
		id: "",
		name: "",
		value: "",
		date: dayjs().format("DD/MM/YY"),
		reference: "",
	});

	const navigate = useNavigate();
	const { setModalStatus } = useContext(ModalContext);
	const { userData } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	let config = {
		headers: {
			Authorization: `Bearer ${userData}`,
		},
	};

	async function submitPayment(e) {
		e.preventDefault();
		setIsModalOpen(true);

		if (userData) {
			try {
				await axios.post(url.payment, paymentDataInput, config);
				setModalStatus({
					status: "Sucesso!",
					message: "Pagamento registrado!",
				});

				setTimeout(() => {
					navigate("/students");
				}, 2000);
			} catch (err) {
				setModalStatus({ status: "Error:", message: err.response.data });
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Box>
				<PaymentForm
					setPaymentDataInput={setPaymentDataInput}
					paymentDataInput={paymentDataInput}
					submitPayment={submitPayment}
				/>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;
	margin-left: 5px;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 20px;

		p {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			color: grey;
			margin-bottom: 20px;
		}
	}
`;
