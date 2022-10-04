import styled from "styled-components";

import logo from "../../assets/image/logo-born.png";

export default function TopBar() {
	return (
		<Box>
			<img src={logo} alt="logo" />
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
	padding: 15px 0;
	border-radius: 0 0 5px 5px;

	img {
		height: 100px;

		@media (max-width: 480px) {
			width: 90%;
		}
	}
`;
