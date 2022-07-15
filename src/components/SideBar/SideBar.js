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

	return (
		<Box>
			<button onClick={navigateToSearch}>Pesquisar Aluno</button>
			<button onClick={navigateToSignupStudents}>Cadastrar Aluno</button>
			<button>Gerar Recibo</button>
			<button>Gerar Declaração</button>
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
		border-radius: 5px;
		margin-top: 10px;
		width: 200px;
		height: 30px;
		background-color: #87ceeb;
	}
`;
