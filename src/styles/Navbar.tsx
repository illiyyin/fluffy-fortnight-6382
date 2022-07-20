import styled from "@emotion/styled";

export const Parent = styled.div`
  position:fixed;
  top:0;
  left:0;
	width: 100vw;
	background-color: white;
`;

export const Button = styled.button`
	padding: 32px;
	background-color: hotpink;
	font-size: 24px;
	border-radius: 4px;
	color: black;
	font-weight: bold;
	&:hover {
		color: white;
	}
`;
