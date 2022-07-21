import React, { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container } from "../styles/ListAnime";
import AnimeItem from "../components/AnimeItem";

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
					extraLarge
				}
			}
		}
	}
`;

export default function ListAnime() {
	const [location, setLocation] = useLocation();
	const [page, setPage] = useState(0);

	const { data, error } = useQuery(query, {
		variables: { page: page, perPage: 10 },
	});
	console.log(location);
	console.log(data);
	return (
		<Container>
			{data?.Page.media.map((item) => (
				<div onClick={()=>setLocation("/anime/" + item.id)}>

					<AnimeItem
						cover={item.coverImage.extraLarge}
						title={item.title.romaji}
						/>
				</div>
			))}
		</Container>
	);
}
