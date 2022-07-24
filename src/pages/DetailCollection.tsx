import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import AnimeItem from "../components/AnimeItem";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import { IDetailAnime } from "../interface/Index";
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
	const [deleteData, setDeleteData] = useState({});
	// const [listCollection, setListCollection] = useState([]);

	const { data, error } = useQuery(query, {
		variables: { id: id },
	});
	useEffect(() => {
		const { listId } = datas.filter((item) => item.id == idCollection)[0];
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

	const handleShowModal = (id, title) => {
		const body = {
			id: id,
			title: title,
		};
		setDeleteData(body);
		setOpen(true);
	};

	return (
		<Container style={{ marginTop: "86px" }}>
			<Modal
				header={`Are You sure want to delete ${deleteData.title} from this collection?`}
				show={open}
				setShow={setOpen}
			>
				<div>
					<button onClick={() => handleDelete(deleteData.id)}>
						Yes
					</button>
				</div>
			</Modal>
			detail Collection
			<Grid>
				{id.length > 0 ? (
					data?.Page.media.map((item: IDetailAnime) => (
						<div style={{ position: "relative" }}>
							<div
								onClick={() => setLocation("/anime/" + item.id)}
							>
								<AnimeItem
									cover={item.coverImage.large}
									title={item.title.romaji}
								/>
							</div>
							<div style={{ position: "absolute", top: 0 }}>
								<button
									onClick={() =>
										handleShowModal(
											item.id,
											item.title.romaji
										)
									}
								>
									Hapus
								</button>
							</div>
						</div>
					))
				) : (
					<p>You dont have any anime list in this collection</p>
				)}
			</Grid>
		</Container>
	);
}
