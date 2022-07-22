import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";
import { Container, Header } from "../styles/DetailAnime";
import { CoverImage } from "../styles/AnimeItem";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import { IContext, ILocalData } from "../interface/Index";

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
	const { datas, setDatas } = useContext<IContext>(AppContext);
	const id = parseInt(location.replace("/anime/", ""));
	const [collectionAdded, setCollectionAdded] = useState<ILocalData[]>([]);

	const [selectCollection, setSelectCollection] = useState<number[]>([]);
	const [open, setOpen] = useState(false);
	const [openNewCollection, setOpenNewCollection] = useState(false);
	const [name, setName] = useState("");

	const { data } = useQuery(query, {
		variables: { id: id },
	});

	useEffect(() => {
		const newArr = datas.filter((item) =>
			item.listId.some((num:number) => num == id)
		);
		if(newArr)setCollectionAdded(newArr);
	}, [datas]);

	const handleAddToCollection = () => {
		const body = datas.map((item) => {
			if (item.listId.length == 0 && selectCollection.includes(item.id)) {
				item.cover = data?.Media.coverImage.large;
			}
			if (selectCollection.includes(item.id)) {
				item.listId.push(id);
			}

			item.listId = [...new Set(item.listId)];
			return item;
		});
		if(body) setDatas(body);
	};
	const handleAddNewCollection = () => {
		const idList = Math.max(...datas.map((item) => item.id), 0);
		const body = {
			id: idList + 1,
			cover: "",
			name: name,
			listId: [],
		};
		const arr = [...datas, body];
		if(arr) setDatas(arr);
		setName("");
		setOpenNewCollection(false);
	};
	return (
		<Container>
			<Modal show={open} setShow={setOpen}>
				<button onClick={() => setOpenNewCollection(true)}>
					Add New collection
				</button>
				list collection
				{datas.map((item) => (
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
			<Modal setShow={setOpenNewCollection} show={openNewCollection}>
				<div style={{ backgroundColor: "#ff6273" }}>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					modal new collection
					<button onClick={handleAddNewCollection}>
						Add New Collection
					</button>
				</div>
			</Modal>
			<Header bg={data?.Media.coverImage.color}>
				{data?.Media.title.romaji}
			</Header>
			<CoverImage src={data?.Media.coverImage.large} />
			ListAnime
			{location}
			<button onClick={() => setOpen(true)}>open</button>
			collection :{" "}
			{collectionAdded.map((item) => (
				<div onClick={() => setLocation("/collection/" + item.id)}>
					{item.name}
				</div>
			))}
		</Container>
	);
}
