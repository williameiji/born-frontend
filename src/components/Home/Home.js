import styled from "styled-components";

import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";

export default function Home(props) {
	return (
		<>
			<TopBar />
			<Container>
				<SideBar />
				{props.children ? (
					props.children
				) : (
					<NothingToRender>Selecione uma opção ao lado</NothingToRender>
				)}
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	margin: 10px 5px 5px 5px;
`;

const NothingToRender = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	height: 80vh;
	margin-left: 5px;
	border-radius: 5px;
`;
