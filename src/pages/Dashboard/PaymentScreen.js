import styled from "styled-components";
import { useState, useContext } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import PaymentForm from "../../layouts/Dashboard/Payment/PaymentForm";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import { newPayment } from "../../services/paymentsApi";
import { getToken } from "../../shared/getToken";

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
	const [isModalOpen, setIsModalOpen] = useState(false);

	let config = {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};

	async function submitPayment(e) {
		e.preventDefault();
		setIsModalOpen(true);

		if (getToken()) {
			try {
				await newPayment(paymentDataInput, config);
				setModalStatus({
					status: "Sucesso!",
					message: "Pagamento registrado!",
				});

				setTimeout(() => {
					setIsModalOpen(false);
					navigate("/students");
				}, 2000);
			} catch (err) {
				setModalStatus({ status: "Error:", message: err.response.data });
				if (err.response?.status === 401) {
					setTimeout(() => {
						setIsModalOpen(false);
						navigate("/login");
					}, 2000);
				}
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
