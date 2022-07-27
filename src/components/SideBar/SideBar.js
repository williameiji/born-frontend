import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
	const navigate = useNavigate();

	function navigateToSearch() {
		navigate("/students");
	}

	function navigateToSignupStudents() {
		navigate("/newstudent");
	}

	function navigateToReceipt() {
		navigate("/receipt");
	}

	function navigateToDeclaration() {
		navigate("/declaration");
	}

	return (
		<Box>
			<button onClick={navigateToSearch}>Pesquisar Aluno</button>
			<button onClick={navigateToSignupStudents}>Cadastrar Aluno</button>
			<button onClick={navigateToReceipt}>Gerar Recibo</button>
			<button onClick={navigateToDeclaration}>Gerar Declaração</button>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 250px;
	height: 100%;
	background-color: white;
	border-radius: 5px;
	padding: 20px;

	button {
		border: none;
		border-radius: 10px 0 10px 0;
		margin-top: 10px;
		width: 200px;
		padding: 15px;
		background-color: #87ceeb;
		font-weight: bold;

		:hover {
			background-color: darkblue;
			color: white;
			cursor: pointer;
		}
	}

	button:first-child {
		margin-top: 0;
	}
`;
