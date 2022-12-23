import styled from "styled-components";

export default function Loading() {
	return (
		<Box>
			<Container>
				<TextTitle>Aguarde...</TextTitle>
				<LoadingDiv></LoadingDiv>
			</Container>
		</Box>
	);
}

const Box = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	background-color: white;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

const LoadingDiv = styled.div`
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

const TextTitle = styled.p`
	font-family: "Recursive";
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	color: #000000;
	margin-bottom: 20px;
`;
