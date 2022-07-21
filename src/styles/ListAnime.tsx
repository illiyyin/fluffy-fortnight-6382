import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 1280px;
	margin: 80px auto;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;

	& > div {
		cursor: pointer;
	}
`;
