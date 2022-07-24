import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "wouter";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import { Container, Grid } from "../styles/ListAnime";
import CollectionItem from "../components/collectionList/CollectionItem"

export default function datas() {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");

	const handleAddNewCollection = () => {
		const idList = Math.max(...datas.map((item) => item.id), 0);
		const body = {
			id: idList + 1,
			cover: "",
			name: name,
			listId: [],
		};
		const arr = [...datas, body];
		setDatas(arr);
		console.log(arr);
		setName("");
		setOpen(false);
	};
	return (
		<div style={{ marginTop: "86px" }}>
			<Container>
				<Modal show={open} setShow={setOpen}>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button onClick={handleAddNewCollection}>
						Add new collection
					</button>
				</Modal>
				<p>List Collection</p>
				<button onClick={() => setOpen(true)}>
					Create New Collection
				</button>
				<Grid style={{ display: "grid" }}>
					{datas.length>0?datas.map((item) => (
						<CollectionItem item={item} />
					)):<p>You dont have any collection</p>}
				</Grid>
			</Container>
		</div>
	);
}
