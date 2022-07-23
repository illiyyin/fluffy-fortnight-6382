import React from "react";
import { IDetailAnime, ILocalData } from "../../interface/Index";
import { CoverImage } from "../../styles/AnimeItem";
import { Header } from "../../styles/DetailAnime";
import Skeleton from "react-loading-skeleton";

export default function AnimeDetail({
	data,
	setOpenModal,
	collection,
	loading,
}: {
	data: IDetailAnime;
	collection: ILocalData[];
	setOpenModal: (value: boolean) => void;
}) {
  console.log(collection);
  console.log((new Array(4)).fill(0))

	if (loading) return <Skeleton />;

	return (
		<div style={{ display: "flex" }}>
			<div>
				<CoverImage src={data?.coverImage.large} />
				<button
					style={{ width: "100%" }}
					onClick={() => setOpenModal(true)}
				>
					Add to Collection
				</button>
				{collection.length > 0 ? "ini kalo ada " : "collection kosong"}
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					marginLeft: "8px",
					textAlign: "left",
				}}
			>
				<Header bg={data?.coverImage.color} />
				<h2>{data?.title.romaji}</h2>
				<h4>{data?.title.native}</h4>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "200px auto",
					}}
				>
					<p>nama</p>
					<p>{data?.startDate.year}</p>
					<p>status</p>
					<p>{data?.status}</p>
					<p>desc</p>
					<p
						dangerouslySetInnerHTML={{
							__html: data?.description,
						}}
					>
						{}
					</p>
				</div>
			</div>
		</div>
	);
}
