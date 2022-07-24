import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 16px;
	
	border-bottom: solid 1px #d7e3ea;
	height: 48px;

	& > div {
		display: flex;
		align-items: center;
		& > p {
			margin-right: 16px;
		}
	}
`;
export const ItemsPerPage = styled.div`
	display: grid;
	place-content: center;
	grid-template-columns: 1fr 1fr 1fr;
	border: solid 2px #d7e3ea;
	border-radius: 8px;
	overflow: hidden;
`;
export const ItemPage = styled.div<{ selected: boolean }>`
	display: flex;
	cursor: pointer;
	padding: 12px 14px;
	font-size: ${({ selected }) => (selected ? "18px" : "16px")};
	font-weight: ${({ selected }) => (selected ? 800 : 500)};
	background-color: ${({ selected }) => (selected ? "#C5EFFC" : "#FFFFFF")};

	color: #076a88;
`;
export const Pagination = styled.div`
	display: grid;
	gap: 8px;
	grid-template-columns: 1fr 1fr;
`;

export const PrevButton = styled.button<{ page: number }>`
	height: 100%;
	cursor: ${({ page }) => (page > 1 ? "pointer" : "not-allowed")};
	border: solid 2px ${({ page }) => (page > 1 ? "#406277" : " #d7e3ea")};
	border-radius: 999px;
	width: 48px;
	background-color: white;
	&:hover {
		background-color: ${({ page }) => page > 1 && "#ecfafe"};
	}
`;
export const NextButton = styled.button`
	height: 100%;
	cursor: pointer;
	border-radius: 999px;
	width: 48px;
	border: solid 2px #406277;
	background-color: white;
	&:hover {
		background-color: #ecfafe;
	}
`;
