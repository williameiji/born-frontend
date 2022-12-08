import styled from "styled-components";

export default function DashboardLayout({ children }) {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	margin: 10px 5px 5px 5px;

	@media (max-width: 480px) {
		display: flex;
		flex-direction: column;

		:first-child div {
			margin: 0 0 30px 0;
		}
	}
`;
