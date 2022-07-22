import styled from "@emotion/styled";

export const Parent = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	background-color: white;
	overflow: hidden;
	& > ul {
		list-style-type: none;
		display: flex;
		justify-content: flex-end;
		padding: 0;
		margin: 0;
		margin-right: 24px;
	}
`;

export const Button = styled.button<{ route: string; path: string }>`
	cursor: pointer;
	padding: 16px 24px;
	background-color: white;
	border: 0;
	border-bottom: solid 4px
		${({ route, path }) => {
			return route == path ? "#BDD0DB" : "white";
		}};
	font-size: 16px;
	&:hover {
		background-color: #F2F6F8;
	}
`;
