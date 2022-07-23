import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import AnimeItem from "../components/AnimeItem";
import { AppContext } from "../context/AppContext";
import { IDetailAnime } from "../interface/Index";
import { Container, Grid } from "../styles/ListAnime";

const query = gql`
	query ($id: [Int]) {
		Page {
			media(id_in: $id) {
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
export default function DetailCollection() {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);
	const [id, setid] = useState<number[]>([]);
	const idCollection = parseInt(location.replace("/collection/", ""));
	// const [listCollection, setListCollection] = useState([]);

	const { data, error } = useQuery(query, {
		variables: { id: id },
	});
	useEffect(() => {
		const { listId } = datas.filter((item) => item.id == idCollection)[0];
		setid(listId);
	}, []);
	const handleDelete = async (animeId: number) => {
		const body = datas.map((item) => {
			if (item.id == idCollection)
				item.listId = item.listId.filter((val) => val != animeId);

			return item;
		});

		setDatas(body);
		setid(id.filter((item) => item != animeId));
	};
	return (
		<Container style={{ marginTop: "86px" }}>
			detail Collection
			<Grid>
				{data?.Page.media.map((item: IDetailAnime) => (
					<div style={{ position: "relative" }}>
						<div onClick={() => setLocation("/anime/" + item.id)}>
							<AnimeItem
								cover={item.coverImage.large}
								title={item.title.romaji}
							/>
						</div>
						<div style={{ position: "absolute", top: 0 }}>
							<button onClick={() => handleDelete(item.id)}>
								Hapus
							</button>
						</div>
					</div>
				))}
			</Grid>
		</Container>
	);
}
