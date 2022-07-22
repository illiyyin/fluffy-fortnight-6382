import React, { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Grid } from "../styles/ListAnime";
import AnimeItem from "../components/AnimeItem";
import Paginate from "../components/Paginate";
import { IDetailAnime } from "../interface/Index";

const query = gql`
	query ($page: Int, $perPage: Int) {
		Page(page: $page, perPage: $perPage) {
			pageInfo {
				total
				currentPage
				lastPage
				hasNextPage
				perPage
			}
			media {
				id
				title {
					romaji
				}
				coverImage {
					medium
				}
			}
		}
	}
`;

export default function ListAnime() {
	const [location, setLocation] = useLocation();
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { data, error } = useQuery(query, {
		variables: { page: page, perPage: perPage },
	});
	return (
		<Container>
			<Paginate
				setPerPage={setPerPage}
				perPage={perPage}
				setPage={setPage}
				page={page}
			/>
			<Grid>
				{data?.Page.media.map((item:IDetailAnime) => (
					<div onClick={() => setLocation("/anime/" + item.id)}>
						<AnimeItem
							cover={item.coverImage.medium}
							title={item.title.romaji}
						/>
					</div>
				))}
			</Grid>
		</Container>
	);
}
