import React from "react";
import { IPaginate } from "../interface/Index";
import {
	Container,
	ItemPage,
	ItemsPerPage,
	PrevButton,
	Pagination,
	NextButton,
} from "../styles/Paginate";
import IconLeft from "./paginate/IconLeft";
import IconRight from "./paginate/IconRight";

export default function Paginate({
	setPerPage,
	perPage,
	setPage,
	page,
}: IPaginate) {
	return (
		<Container>
			<div>
				<p>Item per page</p>
				<ItemsPerPage>
					{[10, 20, 40].map((item) => (
						<ItemPage
							selected={item == perPage ? true : false}
							onClick={() => setPerPage(item)}
							key={item}
						>
							{item}
						</ItemPage>
					))}
				</ItemsPerPage>
			</div>
			<Pagination>
				<PrevButton
					aria-label="Previous Page"
					page={page}
					onClick={() => {
						if (page > 1) setPage(page - 1);
					}}
				>
					<IconLeft fill={page > 1 ? "#406277" : "#d7e3ea"} />
				</PrevButton>
				<NextButton onClick={() => setPage(page + 1)} aria-label="Next Page">
					<IconRight fill="#406277" />
				</NextButton>
			</Pagination>
		</Container>
	);
}
