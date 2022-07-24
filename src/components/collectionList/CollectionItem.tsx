import React, { useContext, useState } from "react";
import { useLocation } from "wouter";
import { ILocalData } from "../../interface/Index";
import AnimeItem from "../AnimeItem";
import ImageDefault from "../../assets/default.webp";

export default function CollectionList({ item }: { item: ILocalData }) {
	const [location, setLocation] = useLocation();

	return (
		<div onClick={() => setLocation("/collection/" + item.id)}>
			<AnimeItem
				cover={item.cover.length > 0 ? item.cover : ImageDefault}
				title={item.name}
			/>
		</div>
	);
}
