import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../context/AppContext";

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
	const {datas,setDatas}=useContext(AppContext)
	const [id, setid] = useState([]);
	const [listCollection, setListCollection] = useState([]);

	const { data, error } = useQuery(query, {
		variables: { id: id },
	});
	useEffect(() => {
		const arr = JSON.parse(localStorage.getItem("collection") || "");
		setListCollection(arr);
		const { listId } = arr.filter(
			(item) => item.id == location.replace("/collection/", "")
		)[0];
		setid(listId);
		console.log(listId);
	}, []);
	// console.log(location.replace("collection/", ""))
	// console.log(location);
	// console.log(id);
	// console.log(data);

	// console.log(listCollection);
	const handleDelete = async(animeId: number) => {
		// console.log(animeId);
		
		const body = listCollection.map((item) => {
			// let wkwk;
			if (item.id == location.replace("/collection/", "")) {
				item.listId = item.listId.filter((val) => val != animeId);
			}

			return item;
		});

		// console.log(body);
		// localStorage.setItem("collection",JSON.stringify(body))
		setDatas(body)
		setid(id.filter((item) => item != animeId));
	};
	return (
		<div style={{ marginTop: "86px" }}>
			detail collection
			{data?.Page.media.map((item) => (
				<div>
					{item.title.romaji}
					<button onClick={() => handleDelete(item.id)}>Hapus</button>
				</div>
			))}
		</div>
	);
}
