import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 900px;
	margin: 80px auto;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div<{ bg: string }>`
	background-color: ${({ bg }) => bg};
	font-size: 24px;
	font-weight: 700;
	padding: 10px 0;
	margin-bottom: 4px;
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
  font-size:14px;
`;
