import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

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
	const [id, setid] = useState([]);

	const { data, error } = useQuery(query, {
		variables: { id: id },
	});
	useEffect(() => {
		const arr = JSON.parse(localStorage.getItem("collection") || "");
		const { listId } = arr.filter(
			(item) => item.id != location.replace("/", "")
		)[0];
		setid(listId);
		console.log(listId);
	}, []);
	console.log(data);
	return (
		<div style={{ marginTop: "86px" }}>
			detail collection
			{data?.Page.media.map((item) => (
				<div>{item.title.romaji}</div>
			))}
		</div>
	);
}
