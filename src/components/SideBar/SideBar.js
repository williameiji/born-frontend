import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

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

	function navigateToPayment() {
		navigate("/payment");
	}

	return (
		<>
			<Box>
				<button onClick={navigateToSearch} data-cy="search">
					Pesquisar Aluno
				</button>
				<button onClick={navigateToPayment} data-cy="payment">
					Lançamento de pagamento
				</button>
				<button onClick={navigateToSignupStudents} data-cy="newStudent">
					Cadastrar Aluno
				</button>
				<button onClick={navigateToReceipt} data-cy="receipt">
					Gerar Recibo
				</button>
				<button onClick={navigateToDeclaration} data-cy="declaration">
					Gerar Declaração
				</button>
			</Box>
			<BoxAccordion>
				<Accordion sx={{ mb: "5px", width: "100%" }}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<FormatListBulletedIcon />
						<Title>Selecione um opção</Title>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<Button variant="text" onClick={navigateToSearch}>
							Pesquisar Aluno
						</Button>
						<Button variant="text" onClick={navigateToPayment}>
							Lançamento de pagamento
						</Button>
						<Button variant="text" onClick={navigateToSignupStudents}>
							Cadastrar Aluno
						</Button>
						<Button variant="text" onClick={navigateToReceipt}>
							Gerar Recibo
						</Button>
						<Button variant="text" onClick={navigateToDeclaration}>
							Gerar Declaração
						</Button>
					</AccordionDetails>
				</Accordion>
			</BoxAccordion>
		</>
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

	@media (max-width: 480px) {
		display: none;
	}
`;

const BoxAccordion = styled.div`
	display: none;
	margin-bottom: 5px;

	p {
	}

	@media (max-width: 480px) {
		display: flex;
	}
`;

const Title = styled.p`
	text-align: center;
	margin: 5px 0 0 5px;
`;
