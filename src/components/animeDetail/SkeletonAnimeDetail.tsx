import React from "react";
import Skeleton from "react-loading-skeleton";
import {
	AsideAnime,
	ContainerDetailAnime,
	DetailAnime,
	GridDetails,
} from "../../styles/DetailAnime";

export default function SkeletonAnimeDetail() {
	return (
		<ContainerDetailAnime>
			<AsideAnime>
				<Skeleton height={400} />
				<Skeleton height={50} />
				<Skeleton height={50} />
			</AsideAnime>
			<DetailAnime>
				<Skeleton />
				<Skeleton height={40} />
				<GridDetails>
					<Skeleton />
					<Skeleton height={30} />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton height={400} />
				</GridDetails>
			</DetailAnime>
		</ContainerDetailAnime>
	);
}
