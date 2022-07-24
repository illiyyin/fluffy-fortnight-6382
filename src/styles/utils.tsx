import styled from "@emotion/styled";

export const Loading = styled.image`
	padding: 2px;
`;

export const DeleteButton = styled.button`
	cursor: pointer;
	position: absolute;
	top: 12px;
	right: 12px;
	width: 48px;
	height: 48px;
	border-radius: 999px;
	border: 0;
	background-color: #f2f6f8;
	&:hover {
		background-color: #bdd0db;
	}
`;
