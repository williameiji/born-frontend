import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import axios from "axios";

import url from "../Services/url";
import UserContext from "../Contexts/UserContext";

export default function DeleteModal({
	isModalOpen,
	setIsModalOpen,
	student,
	setRenderFinds,
}) {
	const [loading, setLoading] = useState(false);
	const [modalStatus, setModalStatus] = useState({
		status: "Deseja remover esse aluno?",
		message: "",
		button: true,
	});

	const navigate = useNavigate();

	function closeModal() {
		setIsModalOpen(false);
	}

	const { userData } = useContext(UserContext);

	let config = {
		headers: {
			Authorization: `Bearer ${userData}`,
		},
	};

	function deleteStudent() {
		setLoading(true);
		try {
			axios
				.delete(`${url.students}/${student._id}`, config)
				.then((response) => {
					setRenderFinds([]);
					setIsModalOpen(false);
					navigate("/students");
				});
		} catch (error) {
			setModalStatus({
				status: "Erro:",
				message: error.response.data,
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
