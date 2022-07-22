import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../context/AppContext";
import { IDetailAnime } from "../interface/Index";

const query = gql`
	query ($id: [Int]) {
		Page {
			media(id_in: $id) {
				id
				title {
					romaji
				}
				coverImage {
					extraLarge
					large
					medium
					color
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
		// const arr = JSON.parse(localStorage.getItem("collection") || "");
		// setDatas(arr);
		const { listId } = datas.filter((item) => item.id == idCollection)[0];
		setid(listId);
		console.log(listId);
	}, []);
	const handleDelete = async (animeId: number) => {
		const body = datas.map((item) => {
			if (item.id == idCollection) {
				item.listId = item.listId.filter((val) => val != animeId);
			}

			return item;
		});

		setDatas(body);
		setid(id.filter((item) => item != animeId));
	};
	return (
		<div style={{ marginTop: "86px" }}>
			detail collection
			{data?.Page.media.map((item: IDetailAnime) => (
				<div>
					{item.title.romaji}
					<button onClick={() => handleDelete(item.id)}>Hapus</button>
				</div>
			))}
		</div>
	);
}
