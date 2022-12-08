import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import globo from "../../assets/image/globo.jpg";
import logo from "../../assets/image/logo.jpg";
import whatsappImg from "../../assets/image/WhatsApp_Logo_2.png";

export default function InitialScreen() {
	const navigate = useNavigate();

	function goToLogin() {
		navigate("/login");
	}

	function sendMessageToWhatsapp() {
		const message = `Olá, gostaria de mais informações sobre os cursos!`;

		const encodedMessage = encodeURIComponent(message);

		window.open(`https://wa.me/5514999999999?text=${encodedMessage}`);
	}

	return (
		<>
			<Box>
				<Header>
					<Button variant="text" sx={{ color: "white" }} onClick={goToLogin}>
						Admin login
					</Button>
				</Header>
				<Container>
					<BoxText>
						<img src={logo} alt="logo" />
						<h2>Instituto de Idiomas</h2>
						<p>Inglês, Alemão, Francês, Japonês, Italiano, Espanhol, Chinês</p>
					</BoxText>
					<BoxImage>
						<img src={globo} alt="globo" />
					</BoxImage>
				</Container>
				<Footer>
					<div>
						<p>Avenida Exemplo nº 1000</p>
						<p>Exemplo - SP</p>
						<p>(14) 9999-9999 / (14) 99999-9999</p>
					</div>
					<div>
						<img
							src={whatsappImg}
							alt="whatsapp"
							onClick={sendMessageToWhatsapp}
						/>
					</div>
				</Footer>
			</Box>
		</>
	);
}

const Box = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: black;
	padding: 20px 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 480px) {
		padding: 5px;
	}
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 480px) {
		background-image: url(${globo});
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

const BoxText = styled.div`
	font-family: "Roboto Mono", monospace;
	color: white;
	text-align: center;

	img {
		height: 100px;
	}

	h2 {
		font-weight: bold;
		font-size: 50px;
	}

	p {
		margin-top: 30px;
		word-wrap: break-word;
	}

	@media (max-width: 480px) {
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
`;

const BoxImage = styled.div`
	img {
		width: 100%;
	}

	@media (max-width: 480px) {
		display: none;
	}
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	p {
		font-size: 12px;
		text-align: center;
		color: white;
	}

	img {
		margin-left: 20px;
		width: 50px;
		height: 50px;
		border-radius: 100px;

		:hover {
			cursor: pointer;
		}
	}
`;
