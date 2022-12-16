import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

import { removeStudent } from "../../../services/studentsApi";
import { TDeleteModal, TModalStatus } from "./types";
import { getToken } from "../../../shared/getToken";

export default function DeleteModal({
	isModalOpen,
	setIsModalOpen,
	student,
	setRenderFinds,
}: TDeleteModal) {
	const [loading, setLoading] = useState<boolean>(false);
	const [modalStatus, setModalStatus] = useState<TModalStatus>({
		status: "Deseja remover esse aluno?",
		message: "",
		button: true,
	});

	const navigate = useNavigate();

	function closeModal() {
		setIsModalOpen(false);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};

	async function deleteStudent() {
		setLoading(true);
		try {
			await removeStudent(student._id, config).then(() => {
				setRenderFinds([]);
				setIsModalOpen(false);
				navigate("/students");
			});
		} catch (error: any) {
			setModalStatus({
				status: "Erro:",
				message: String(error.response.data),
				button: false,
			});
		}
	}

	return (
		<div>
			<Modal
				isOpen={isModalOpen}
				ariaHideApp={false}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay"
			>
				<Box>
					<TextTitle>{modalStatus.status}</TextTitle>
					{modalStatus.button ? (
						<ButtonContainer>
							<LoadingButton
								variant="outlined"
								onClick={deleteStudent}
								loading={loading}
								sx={{ color: "red", width: "100%", mr: "20px" }}
							>
								Sim
							</LoadingButton>
							<Button
								variant="contained"
								onClick={closeModal}
								sx={{ backgroundColor: "#87ceeb", color: "black" }}
							>
								Não
							</Button>
						</ButtonContainer>
					) : (
						modalStatus.message
					)}
				</Box>
			</Modal>
		</div>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
`;

const TextTitle = styled.p`
	font-family: "Recursive";
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	color: #000000;
	margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	:first-child button {
		margin-right: 20px;
	}
`;
