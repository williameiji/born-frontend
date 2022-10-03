import styled from "styled-components";
import Modal from "react-modal";
import { useContext } from "react";

import ModalContext from "../Contexts/ModalContext";

export default function ModalGeneric({
	isModalOpen,
	setIsModalOpen,
	setBlockInput,
}) {
	const { modalStatus } = useContext(ModalContext);

	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<div>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				className="Modal"
				overlayClassName="Overlay"
			>
				<Box>
					{modalStatus.status === "error" ? (
						<>
							<TextTitle>Erro:</TextTitle>
							<p>{modalStatus.message}</p>
						</>
					) : (
						<>
							<TextTitle>Aguarde...</TextTitle>
							<Loading></Loading>
						</>
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

const Loading = styled.div`
	position: relative;
	width: 2em;
	height: 2em;
	border: 3px solid #3cefff;
	overflow: hidden;
	animation: spin 3s ease infinite;

	::before {
		content: "";
		position: absolute;
		top: -3px;
		left: -3px;
		width: 2em;
		height: 2em;
		background-color: hsla(185, 100%, 62%, 0.75);
		transform-origin: center bottom;
		transform: scaleY(1);
		animation: fill 3s linear infinite;
	}
`;
