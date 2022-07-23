import React, { useContext } from "react";
import { useLocation } from "wouter";
import { AppContext } from "../../context/AppContext";
import AnimeItem from "../AnimeItem";

export default function CollectionList({ item }) {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);

	const deleteCollection = (collectionId: number) => {
		const arr = datas.filter((item) => item.id != collectionId);
		setDatas(arr);
	};
	return (
		<div
			style={{
				position:"relative",
				display: "flex",
				margin: "0 auto",
				justifyContent: "space-between",
				width: "100%",
				alignItems: "center",
			}}
		>
			<div
				onClick={() => setLocation("/collection/" + item.id)}
			>
				<AnimeItem cover={item.cover} title={item.name} />
			</div>
			<div style={{position:"absolute",top:0}}>
				<button onClick={() => deleteCollection(item.id)} title="Delete Collection">
					hapuss
				</button>
			</div>
		</div>
	);
}
