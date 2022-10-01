import styled from "styled-components";

import logo from "../../assets/image/logo-born.png";

export default function AuthScreen(props) {
	return (
		<Box>
			<Container>
				<img src={logo} alt="logo" />
				{props.children}
			</Container>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	border-radius: 5px;
	margin-top: 20vh;
	border: 1px solid #708090;
	background-color: white;
	padding: 5px;

	img {
		height: 150px;
	}

	form {
		display: flex;
		flex-direction: column;

		padding: 20px;

		button {
			width: 50%;
			margin: 0 auto;
		}
	}
`;
