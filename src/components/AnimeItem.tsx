import React from "react";
import { CoverImage, Title } from "../styles/AnimeItem";
import { useLocation } from "wouter";
import { IItemAnime } from "../interface/Index";

export default function AnimeItem({ cover, title }: IItemAnime) {
	return (
		<div>
			<CoverImage src={cover} alt={title} />
			<Title>{title}</Title>
		</div>
	);
}
