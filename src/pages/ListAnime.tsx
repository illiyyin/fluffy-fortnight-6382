import React, { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Grid } from "../styles/ListAnime";
import AnimeItem from "../components/AnimeItem";
import Paginate from "../components/paginate/Paginate";
import { IDetailAnime } from "../interface/Index";
import Loading from "../assets/loading.svg";

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
					large
				}
			}
		}
	}
`;

export default function ListAnime() {
	const [location, setLocation] = useLocation();
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { data, loading,error } = useQuery(query, {
		variables: { page: page, perPage: perPage },
	});
	console.log(error)
	return (
		<Container>
			<Paginate
				setPerPage={setPerPage}
				perPage={perPage}
				setPage={setPage}
				page={page}
			/>
			{loading ? (
				<img src={Loading} alt="loading" width={48} />
			) : (
				<Grid>
					{data?.Page.media.map((item: IDetailAnime) => (
						<div onClick={() => setLocation("/anime/" + item.id)} key={item.id}>
							<AnimeItem
								cover={item.coverImage.large}
								title={item.title.romaji}
							/>
						</div>
					))}
				</Grid>
			)}
		</Container>
	);
}
