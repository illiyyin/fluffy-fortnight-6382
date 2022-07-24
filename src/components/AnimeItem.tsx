import { AnimeItem, CoverImage, Title } from "../styles/AnimeItem";
import { IItemAnime } from "../interface/Index";

export default function Item({ cover, title }: IItemAnime) {
	return (
		<div>
			<CoverImage src={cover} alt={title} />
			<Title>{title}</Title>
		</div>
	);
}
