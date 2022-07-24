import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 900px;
	margin: 80px auto;
	display: flex;
	flex-direction: column;
	padding: 8px;
`;

export const Header = styled.div<{ bg: string }>`
	background-color: ${({ bg }) => bg};
	height: 8px;
	margin-bottom: 8px;
`;

export const CollectionItem = styled.div<{ selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ selected }) => (selected ? "#D8F5FD" : "white")};
	cursor: pointer;
	min-height: 32px;
	padding: 0px 12px;
	border-bottom: solid 1px #bdd0db;
	text-align: left;
	&:hover {
		background-color: ${({ selected }) => !selected && "#F2F6F8"};
	}
`;

export const CollectionContainer = styled.div`
	overflow-y: scroll;
	border: solid 1px #bdd0db;
	border-radius: 4px;
	max-height: 300px;
	min-height: 200px;
`;
export const FooterModal = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const ButtonSave = styled.button`
	border-radius: 99px;
	background-color: #00477a;
	border: 0;
	padding: 12px 18px;
	font-size: 14px;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: #00538f;
	}
	&:disabled {
		background-color: #c2c2c2;
		cursor: not-allowed;
	}
`;

export const ButtonAdd = styled.button`
	border-radius: 99px;
	background-color: white;
	border: solid 2px #f2f6f8;
	padding: 4px 8px;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		background-color: #f2f6f8;
	}
`;

export const ContainerAddNewCollection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	margin-top: 48px;
`;
export const InputName = styled.input`
	padding: 8px 16px;
	border-radius: 4px;
	max-width: 200px;
	margin-bottom: 24px;
`;
export const WarnText = styled.p`
	color: red;
	font-size: 14px;
`;

export const ButtonAddCollection = styled.button`
	width: 100%;
	max-width: 300px;
	border: 0;
	border-radius: 4px;
	padding: 8px;
	color: white;
	font-size: 16px;
	cursor: pointer;
	background-color: #01baef;
	&:hover {
		background-color: #019fcb;
	}
`;

export const ListCollection = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export const CollectionName = styled.div`
	background-color: #f2f6f8;
	margin-right: 4px;
	margin-top: 4px;
	padding: 8px;
	border-radius: 4px;
	cursor: pointer;
	& > p {
		margin: 0;
	}
`;

export const AsideAnime = styled.div`
	max-width: 300px;
	width: 100%;
	margin-bottom: 24px;
`;
export const DetailAnime = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	text-align: left;
	margin-left: 0;
	@media (min-width: 900px) {
		margin-left: 8px;
	}
`;

export const ContainerDetailAnime = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 900px) {
		flex-direction: row;
		align-items: start;
	}
`;
export const GridDetails = styled.div`
	display: grid;
	grid-template-columns: 200px auto;
	gap:8px;
	& > p,
	h4 {
		margin: 4px;
	}
`;
