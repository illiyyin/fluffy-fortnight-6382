import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 1080px;
	margin: 80px auto;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	gap: 20px;

	@media (min-width: 640px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (min-width: 900px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	& > div {
		cursor: pointer;
	}
`;
