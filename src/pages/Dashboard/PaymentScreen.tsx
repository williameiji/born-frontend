import { useState, useContext } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import PaymentForm from "../../layouts/Dashboard/Payment";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import { newPayment } from "../../services/paymentsApi";
import { getToken } from "../../shared/getToken";
import { Payment } from "../../layouts/Dashboard/Payment/types";

export default function PaymentScreen() {
	const [paymentDataInput, setPaymentDataInput] = useState<Payment>({
		id: "",
		name: "",
		value: "",
		date: dayjs().format("DD/MM/YY"),
		reference: "",
	});

	const navigate = useNavigate();
	const modal = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	async function submitPayment(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		try {
			await newPayment(paymentDataInput, headerConfig());
			modal?.setModalStatus({
				status: "Sucesso!",
				message: "Pagamento registrado!",
			});

			setTimeout(() => {
				setIsModalOpen(false);
				navigate("/students");
			}, 2000);
		} catch (err: any) {
			modal?.setModalStatus({ status: "Error:", message: err.response.data });
		}
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

			<PaymentForm
				setPaymentDataInput={setPaymentDataInput}
				paymentDataInput={paymentDataInput}
				submitPayment={submitPayment}
			/>
		</Home>
	);
}
