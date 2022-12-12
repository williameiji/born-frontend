import styled from "styled-components";

import * as types from "./types";

export default function ButtonSideBar({
	text,
	handleClick,
	cyId,
}: types.TButtonSideBar) {
	return (
		<>
			<Button onClick={handleClick} data-cy={cyId}>
				{text}
			</Button>
		</>
	);
}

const Button = styled.button`
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
`;
