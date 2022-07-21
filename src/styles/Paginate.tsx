import styled from "@emotion/styled";

export const Container = styled.div`
	display:flex;
  justify-content: space-between;
`;
export const ItemPerPage = styled.div`
  display:grid;
  gap:20px;
  grid-template-columns: 1fr 1fr 1fr;
`
export const Pagination = styled.div`
  display:grid;
  gap:20px;
  grid-template-columns: 1fr 1fr ;
`