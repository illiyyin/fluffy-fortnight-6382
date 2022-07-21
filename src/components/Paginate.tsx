import React from "react";
import { Container, ItemPerPage,Pagination } from "../styles/Paginate";

export default function Paginate({ setPerPage, perPage,setPage,page }) {
	return (
    <Container>
			<ItemPerPage>
				{[10, 20, 40].map((item) => (
					<div onClick={()=>setPerPage(item)}>{item}</div>
				))}
      </ItemPerPage>
      <Pagination>
        <button onClick={()=>setPage(page-1)}>prev</button>
        <button onClick={()=>setPage(page+1)}>next</button>

      </Pagination>
		</Container>
	);
}
