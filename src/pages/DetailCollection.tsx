import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import AnimeItem from "../components/AnimeItem";
import SkeletonAnimeList from "../components/animeList/SkeletonAnimeList";
import Button from "../components/DeleteButton";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import { IDelete, IDetailAnime } from "../interface/Index";
import { ButtonSave } from "../styles/DetailAnime";
import { Container, Grid } from "../styles/ListAnime";

const query = gql`
	query ($id: [Int]) {
		Page {
			media(id_in: $id) {
				id
				title {
					romaji
				}
				coverImage {
					large
				}
			}
		}
	}
`;
export default function DetailCollection() {
	const [location, setLocation] = useLocation();
	const { datas, setDatas } = useContext(AppContext);
	const [id, setid] = useState<number[]>([]);
	const idCollection = parseInt(location.replace("/collection/", ""));
	const [open, setOpen] = useState(false);
	const [deleteData, setDeleteData] = useState<IDelete>({} as IDelete);
	const [name, setName] = useState("");

	const { data, error, loading } = useQuery(query, {
		variables: { id: id },
	});
	useEffect(() => {
		const { listId } = datas.filter((item) => item.id == idCollection)[0];
		const collectionName = datas.filter((item) => item.id == idCollection);
		setName(collectionName[0].name);
		setid(listId);
	}, []);
	const handleDelete = async (animeId: number) => {
		const body = datas.map((item) => {
			if (item.id == idCollection)
				item.listId = item.listId.filter((val) => val != animeId);

			return item;
		});

		setDatas(body);
		setid(id.filter((item) => item != animeId));
		setOpen(false);
	};

	const handleShowModal = (id: number, title: string) => {
		const body = {
			id: id,
			title: title,
		};
		setDeleteData(body);
		setOpen(true);
	};

	return (
		<>
			{loading ? (
				<SkeletonAnimeList />
			) : (
					<Container>
						
					<Modal
						header={`Are You sure want to delete ${deleteData.title} from this collection?`}
						show={open}
						setShow={setOpen}
					>
							<ButtonSave onClick={() => handleDelete(deleteData.id)}>
								Yes
							</ButtonSave>
					</Modal>
					<h2>{name + " Collection"}</h2>
					{id.length > 0 ? (
						<Grid>
							{data?.Page.media.map((item: IDetailAnime) => (
								<div style={{ position: "relative" }}>
									<div
										onClick={() =>
											setLocation("/anime/" + item.id)
										}
									>
										<AnimeItem
											cover={item.coverImage.large}
											title={item.title.romaji}
										/>
									</div>
									<Button
										onClick={() =>
											handleShowModal(
												item.id,
												item.title.romaji
											)
										}
										title="Delete Anime"
									/>
								</div>
							))}
						</Grid>
					) : (
						<p>You dont have any anime list in this collection</p>
					)}
				</Container>
			)}
		</>
	);
}
