import React from "react";
import { useLocation } from "wouter";
import { IDetailAnime, ILocalData } from "../../interface/Index";
import { CoverImage } from "../../styles/AnimeItem";
import {
	AsideAnime,
	ButtonAddCollection,
	CollectionName,
	ContainerDetailAnime,
	Header,
	ListCollection,
	GridDetails,
	DetailAnime,
} from "../../styles/DetailAnime";

export default function AnimeDetail({
	data,
	setOpenModal,
	collection,
}: {
	data: IDetailAnime;
	collection: ILocalData[];
	setOpenModal: (value: boolean) => void;
}) {
	const [location, setLocation] = useLocation();

	return (
		<ContainerDetailAnime>
			<AsideAnime>
				<CoverImage src={data.coverImage.large} />
				<ButtonAddCollection onClick={() => setOpenModal(true)}>
					Add to Collection
				</ButtonAddCollection>

				{collection.length > 0 ? (
					<>
						<p>This anime exist in these collection :</p>
						<ListCollection>
							{collection.map((item) => (
								<CollectionName
									onClick={() =>
										setLocation("/collection/" + item.id)
									}
								>
									<p>{item.name}</p>
								</CollectionName>
							))}
						</ListCollection>
					</>
				) : (
					<p>This anime haven't added to any collection</p>
				)}
			</AsideAnime>
			<DetailAnime>
				<Header bg={data.coverImage.color} />
				<h2>{data.title.romaji}</h2>
				<GridDetails>
					<p>Native Name</p>
					<h4>{data.title.native}</h4>
					<p>Released Year</p>
					<p>{data.startDate.year}</p>
					<p>status</p>
					<p>{data.status}</p>
					<p>desc</p>
					<p
						dangerouslySetInnerHTML={{
							__html: data.description,
						}}
					>
						{}
					</p>
				</GridDetails>
			</DetailAnime>
		</ContainerDetailAnime>
	);
}
