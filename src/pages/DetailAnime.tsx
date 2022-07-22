import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Header } from "../styles/DetailAnime";
import { CoverImage } from "../styles/AnimeItem";

const query = gql`
	query ($id: Int) {
		Media(id: $id) {
			id
			title {
				romaji
			}
			coverImage {
				large
				color
			}
		}
	}
`;

export default function DetailAnime() {
	const [location, setLocation] = useLocation();
	const id = location.replace("/anime/", "");
	const [page, setPage] = useState(0);
	const [listCollecion,setListCollection]=useState([])

	const { data } = useQuery(query, {
		variables: { id: id },
	});

	useEffect(() => {
		const arr = JSON.parse(localStorage.getItem("collection") || "");
		const newArr = arr.filter(item => item.listId.some(num=>num==id))
		
		console.log(newArr)
		console.log(arr)
		setListCollection(newArr)
	}, [])
	console.log(id);
	console.log(data);
	return (
		<Container>
			<Header bg={data?.Media.coverImage.color}>
				{data?.Media.title.romaji}
				</Header>
			<CoverImage src={data?.Media.coverImage.large} />
			ListAnime
			{location}
			collection : {listCollecion.map(item=>item.name)}
		</Container>
	);
}
