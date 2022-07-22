import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 900px;
	margin: 80px auto;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div<{ bg: string }>`
	background-color: ${(props) => props.bg};
	font-size: 24px;
	font-weight: 700;
	padding: 10px 0;
	margin-bottom: 4px;
`;
