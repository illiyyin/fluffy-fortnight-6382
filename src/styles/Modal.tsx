import styled from "@emotion/styled";

export const Container = styled.div<{ unmount: boolean }>`
	position: fixed;
	display: flex;
	align-items: center;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	pointer-events: ${({ unmount }) => (unmount ? "auto" : "none")};
	opacity: ${({ unmount }) => (unmount ? "100%" : "0%")};
	
	transition: opacity 1s;
`;

export const CloseArea = styled.div`
position: fixed;
	display: flex;
	align-items: center;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
  background-color: rgba(0, 0, 0, 0.42);
`

export const ModalBox = styled.div`
	position: relative;
	min-height: 200px;
	width: 100%;
	max-width: 400px;
	background-color: white;
	margin: 0 auto;
	border-radius: 8px;
	box-shadow: 4px 0px 24px 0px rgba(125, 207, 252, 0.16);
	padding: 24px 12px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 8px;
	right: 8px;
	background: white;
	border: 0;
	cursor: pointer;
  border-radius:999px;
  width:36px;
  height:36px;
	&:hover {
		background-color: #F2F6F8;
	}
`;
