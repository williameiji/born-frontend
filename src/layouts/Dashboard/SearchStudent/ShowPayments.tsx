import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalGeneric from "../../../shared/ModalGeneric";
import ModalContext from "../../../contexts/ModalContext";
import { getPaymentById, deletePayments } from "../../../services/paymentsApi";
import { TEditForm } from "../EditStudentInformation/types";
import { TPayments } from "./types";

export default function ShowPayments({
	renderFinds,
	params,
}: {
	renderFinds: TEditForm[];
	params?: string;
}) {
	const [renderPayments, setRenderPayments] = useState<TPayments[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modal = useContext(ModalContext);
	const navigate = useNavigate();
	const [control, setControl] = useState(false);

	useEffect(() => {
		setIsModalOpen(true);

		(async () => {
			try {
				const response = await getPaymentById(
					renderFinds[Number(params)]._id
				);

				if (response.length) {
					setRenderPayments(response);
				} else {
					setRenderPayments([]);
				}

				setIsModalOpen(false);
			} catch (error: any) {
				modal?.setModalStatus({
					status: "Erro:",
					message: error.response?.data,
				});
				setTimeout(() => {
					navigate("/students");
				}, 2000);
			}
		})();
	}, [control]);

	async function deletePayment(id: string) {
		if (window.confirm("Deseja deletar o pagamento?")) {
			setIsModalOpen(true);

			try {
				await deletePayments(id);
				setIsModalOpen(false);
				setControl(!control);
			} catch (error: any) {
				modal?.setModalStatus({
					status: "Erro:",
					message: error.response?.data,
				});
			}
		}
	}

	return (
		<>
			<ModalGeneric
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
			<Box>
				<ContainerPayments>
					{renderPayments.length
						? renderPayments.map((payment, index) => (
								<RenderPayments key={index}>
									<p>{payment.reference.toUpperCase()}</p>
									<p>
										R${Number(payment.value).toFixed(2)}
									</p>{" "}
									<p>{payment.date}</p>
									<BoxButtons>
										<DeleteIcon
											sx={{ color: "red" }}
											onClick={() =>
												deletePayment(payment._id)
											}
										/>
									</BoxButtons>
								</RenderPayments>
						  ))
						: "Aluno não realizou pagamentos ainda!"}
				</ContainerPayments>
			</Box>
		</>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;
	overflow: auto;

	@media (max-width: 480px) {
		margin: 0;
		height: 100%;
	}
`;

const ContainerPayments = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
	overflow: auto;
	padding: 10px;
`;

const RenderPayments = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 50px;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin-bottom: 5px;
	padding: 0 10px;

	p {
		width: 100%;
	}
`;

const BoxButtons = styled.div`
	display: flex;
`;
