import React, { useContext, useState } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../../context/AppContext";
import AnimeItem from "../AnimeItem";
import Modal from "../Modal";

export default function CollectionList({ item }) {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const [deleteData, setDeleteData] = useState({});

	const deleteCollection = (collectionId: number) => {
		const arr = datas.filter((item) => item.id != collectionId);
		setDatas(arr);
		setOpen(false)
	};
	const handleShowModal = (id, title) => {
		const body = {
			id: id,
			title: title,
		};
		setDeleteData(body);
		setOpen(true);
	};
	return (
		<div
			style={{
				position: "relative",
				display: "flex",
				margin: "0 auto",
				justifyContent: "space-between",
				width: "100%",
				alignItems: "center",
			}}
		>
			<Modal
				header={`Are You sure want to delete ${deleteData.title} from this collection?`}
				show={open}
				setShow={setOpen}
			>
				<div>
					<button onClick={() => deleteCollection(deleteData.id)}>
						Yes
					</button>
				</div>
			</Modal>
			<div onClick={() => setLocation("/collection/" + item.id)}>
				<AnimeItem cover={item.cover} title={item.name} />
			</div>
			<div style={{ position: "absolute", top: 0 }}>
				<button
					onClick={() => handleShowModal(item.id, item.name)}
					title="Delete Collection"
				>
					hapuss
				</button>
			</div>
		</div>
	);
}
