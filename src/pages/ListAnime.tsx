import React, { useState,useContext } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Grid } from "../styles/ListAnime";
import AnimeItem from "../components/AnimeItem";
import Paginate from "../components/Paginate";
import { AppContext } from "../context/AppContext";

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
	const {datas,setDatas}=useContext(AppContext)
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);



	const { data, error } = useQuery(query, {
		variables: { page: page, perPage: perPage },
	});
	console.log(location);
	console.log(data);
	console.log(datas);
	return (
		<Container>
			
			<Paginate
				setPerPage={setPerPage}
				perPage={perPage}
				setPage={setPage}
				page={page}
			/>
			<Grid>
				{data?.Page.media.map((item) => (
					<div onClick={() => setLocation("/anime/" + item.id)}>
						<AnimeItem
							cover={item.coverImage.extraLarge}
							title={item.title.romaji}
						/>
					</div>
				))}
			</Grid>
		</Container>
	);
}
