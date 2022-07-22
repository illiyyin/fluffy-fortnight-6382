import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "wouter";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";

export default function datas() {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");

	const handleAddNewCollection = () => {
		const idList = Math.max(...datas.map((item) => item.id), 0);
		console.log(idList);
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
	const deleteCollection = (collectionId: number) => {
		const arr = datas.filter((item) => item.id != collectionId);
		setDatas(arr);
	};
	return (
		<div style={{ marginTop: "86px" }}>
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
			<button onClick={() => setOpen(true)}>Create New Collection</button>
			List Collection
			{datas.map((item) => (
				<div>
					<img src={item.cover} />
					<p onClick={() => setLocation("/collection/" + item.id)}>
						{item.name}
					</p>
					<button onClick={() => deleteCollection(item.id)}>
						hapuss
					</button>
				</div>
			))}
		</div>
	);
}
