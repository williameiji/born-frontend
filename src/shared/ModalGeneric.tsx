import styled from "styled-components";
import Modal from "react-modal";
import { useContext } from "react";

import ModalContext from "../contexts/ModalContext";

type TModal = {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalGeneric({ isModalOpen, setIsModalOpen }: TModal) {
	const status = useContext(ModalContext);

	function closeModal() {
		setIsModalOpen(false);
		status?.setModalStatus(null);
	}

	function RenderStatus() {
		if (status?.modalStatus) {
			return (
				<>
					<TextTitle>{status.modalStatus.status}</TextTitle>
					<p>{status.modalStatus.message}</p>
				</>
			);
		}
		return (
			<>
				<TextTitle>Aguarde...</TextTitle>
				<Loading></Loading>
			</>
		);
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
					<RenderStatus />
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
