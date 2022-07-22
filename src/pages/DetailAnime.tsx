import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Header } from "../styles/DetailAnime";
import { CoverImage } from "../styles/AnimeItem";
import Modal from "../components/Modal";

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
	const [collectionAdded, setCollectionAdded] = useState([]);
	const [listCollection, setListCollection] = useState([]);

	const [selectCollection, setSelectCollection] = useState([]);
	const [open, setOpen] = useState(false);

	const { data } = useQuery(query, {
		variables: { id: id },
	});

	useEffect(() => {
		const arr = JSON.parse(localStorage.getItem("collection") || "");
		const newArr = arr.filter((item) =>
			item.listId.some((num) => num == id)
		);

		console.log(newArr);
		console.log(arr);
		setCollectionAdded(newArr);
		setListCollection(arr);
	}, []);
	console.log(selectCollection);
	console.log(listCollection);

	const handleAddToCollection = () => {
		const body = listCollection.map((item) => {
			if (selectCollection.includes(item.id)) {
				item.listId.push(parseInt(id));
			}
			item.listId = [...new Set(item.listId)];
			return item;
		});
		localStorage.setItem("collection", JSON.stringify(body));
		console.log(body);
	};
	return (
		<Container>
			<Modal show={open} setShow={setOpen}>
				list collection
				{listCollection.map((item) => (
					<div
						onClick={() => {
							if (selectCollection.includes(item.id)) {
								setSelectCollection((prev) =>
									prev.filter((val) => val != item.id)
								);
							} else {
								setSelectCollection([
									...selectCollection,
									item.id,
								]);
							}
						}}
					>
						{item.name}
					</div>
				))}
				<button onClick={handleAddToCollection}>
					Add to collection
				</button>
			</Modal>
			<Header bg={data?.Media.coverImage.color}>
				{data?.Media.title.romaji}
			</Header>
			<CoverImage src={data?.Media.coverImage.large} />
			ListAnime
			{location}
			<button onClick={() => setOpen(true)}>open</button>
			collection : {collectionAdded.map((item) => (
				<div onClick={()=>setLocation("/collection/"+item.id)}>

			{		item.name}
				</div>
			))}
		</Container>
	);
}
