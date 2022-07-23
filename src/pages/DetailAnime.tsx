import { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, gql } from "@apollo/client";

import {
	ButtonAdd,
	ButtonSave,
	CollectionContainer,
	Container,
	ContainerAddNewCollection,
	FooterModal,
	Header,
	InputName,
	WarnText,
} from "../styles/DetailAnime";
import { CoverImage } from "../styles/AnimeItem";

import Modal from "../components/Modal";

import { AppContext } from "../context/AppContext";
import { IContext, ILocalData } from "../interface/Index";
import CollectionItem from "../components/animeDetail/CollectionItem";

const query = gql`
	query ($id: Int) {
		Media(id: $id) {
			id
			title {
				romaji
			}
			coverImage {
				large
				color
			}
		}
	}
`;

export default function DetailAnime() {
	const { datas, setDatas } = useContext<IContext>(AppContext);

	const [location, setLocation] = useLocation();
	const id = parseInt(location.replace("/anime/", ""));

	const [collectionAdded, setCollectionAdded] = useState<ILocalData[]>([]);
	const [selectCollection, setSelectCollection] = useState<number[]>([]);
	const [name, setName] = useState("");
	const [open, setOpen] = useState(false);
	const [openNewCollection, setOpenNewCollection] = useState(false);
	const [warnNameCollection, setWarnNameCollection] = useState("");

	const { data } = useQuery(query, {
		variables: { id: id },
	});

	useEffect(() => {
		const newArr = datas.filter((item) =>
			item.listId.some((num: number) => num == id)
		);
		setCollectionAdded(newArr);
	}, [datas]);

	useEffect(() => {
		setWarnNameCollection("");
	}, [openNewCollection]);

	const handleAddToCollection = () => {
		const body = datas.map((item) => {
			if (item.listId.length == 0 && selectCollection.includes(item.id))
				item.cover = data?.Media.coverImage.large;

			if (selectCollection.includes(item.id)) item.listId.push(id);

			item.listId = [...new Set(item.listId)];
			return item;
		});
		setDatas(body);
		setOpen(false);
	};

	const handleAddNewCollection = async () => {
		const nameList = datas.map((item) => item.name);

		if (/^\s+$/g.test(name)||name=="") {
			setWarnNameCollection("Name can't be empty");
			return;
		}

		if (nameList.includes(name)) {
			setWarnNameCollection("Name already occupied");
			return;
		}

		if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(name)) {
			setWarnNameCollection("Put name only using word and/or number");
			return;
		}

		const numID = Math.max(...datas.map((item) => item.id), 0);

		const body = {
			id: numID + 1,
			cover: "",
			name: name,
			listId: [],
		};
		const arr = [...datas, body];

		setDatas(arr);
		setOpenNewCollection(false);
		setName("");
	};

	const handleSelectCollection = (collectionId: number) => {
		if (selectCollection.includes(collectionId))
			setSelectCollection((prev) =>
				prev.filter((val) => val != collectionId)
			);
		else setSelectCollection([...selectCollection, collectionId]);
	};

	return (
		<Container>
			<Modal
				show={open}
				setShow={setOpen}
				header="Add anime to Collection"
			>
				<CollectionContainer>
					{datas.map((item) => (
						<div onClick={() => handleSelectCollection(item.id)}>
							<CollectionItem
								name={item.name}
								selected={selectCollection.includes(item.id)}
							/>
						</div>
					))}
				</CollectionContainer>
				<FooterModal>
					<ButtonAdd onClick={() => setOpenNewCollection(true)}>
						Add New Collection
					</ButtonAdd>

					<ButtonSave
						onClick={handleAddToCollection}
						disabled={selectCollection.length > 0 ? false : true}
					>
						Save
					</ButtonSave>
				</FooterModal>
			</Modal>
			<Modal setShow={setOpenNewCollection} show={openNewCollection}>
				<ContainerAddNewCollection>
					<InputName
						placeholder="Input Collection's name here"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					{warnNameCollection.length > 0 && (
						<WarnText>{warnNameCollection}</WarnText>
					)}
					<div>
						<ButtonSave onClick={handleAddNewCollection}>
							Add New Collection
						</ButtonSave>
					</div>
				</ContainerAddNewCollection>
			</Modal>
			<Header bg={data?.Media.coverImage.color}>
				{data?.Media.title.romaji}
			</Header>
			<CoverImage src={data?.Media.coverImage.large} />
			{location}
			<button onClick={() => setOpen(true)}>open</button>

			{collectionAdded.map((item) => (
				<div onClick={() => setLocation("/collection/" + item.id)}>
					{item.name}
				</div>
			))}
		</Container>
	);
}
