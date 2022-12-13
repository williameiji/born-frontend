import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ButtonSideBar from "../../components/ButtonSideBar";

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
				<ButtonSideBar
					handleClick={navigateToSearch}
					text="Pesquisar Aluno"
					data-cy="search"
				/>
				<ButtonSideBar
					handleClick={navigateToPayment}
					text="Receber pagamento"
					data-cy="payment"
				/>
				<ButtonSideBar
					handleClick={navigateToSignupStudents}
					text="Cadastrar Aluno"
					data-cy="newStudent"
				/>
				<ButtonSideBar
					handleClick={navigateToReceipt}
					text="Gerar Recibo"
					data-cy="receipt"
				/>
				<ButtonSideBar
					handleClick={navigateToDeclaration}
					text="Gerar Declaração"
					data-cy="declaration"
				/>
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
							Receber pagamento
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
