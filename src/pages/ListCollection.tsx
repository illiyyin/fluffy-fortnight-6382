import { useState, useContext } from "react";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import { Container, Grid } from "../styles/ListAnime";
import CollectionItem from "../components/collectionList/CollectionItem";
import { IDelete } from "../interface/Index";
import Button from "../components/DeleteButton";
import { ButtonSave, InputName, WarnText } from "../styles/DetailAnime";
import ModalAddCollection from "../components/ModalAddCollection";
import { ButtonCreateCollection } from "../styles/ListCollection";

export default function datas() {
	const { datas, setDatas } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [name, setName] = useState("");
	const [deleteData, setDeleteData] = useState<IDelete>({} as IDelete);

	const deleteCollection = (collectionId: number) => {
		const arr = datas.filter((item) => item.id != collectionId);
		setDatas(arr);
		setOpenDeleteModal(false);
	};
	const handleShowModal = (id: number, title: string) => {
		const body = {
			id: id,
			title: title,
		};
		setDeleteData(body);
		setOpenDeleteModal(true);
	};
	return (
		<Container>
			<Modal
				header={`Are You sure want to delete ${deleteData.title} collection?`}
				show={openDeleteModal}
				setShow={setOpenDeleteModal}
			>
				<ButtonSave onClick={() => deleteCollection(deleteData.id)}>
					Yes
				</ButtonSave>
			</Modal>
			<ModalAddCollection
				open={open}
				setOpen={setOpen}
				name={name}
				setName={setName}
			/>

			<h2>List Collection</h2>

			<ButtonCreateCollection onClick={() => setOpen(true)}>
				Create New Collection
			</ButtonCreateCollection>

			{datas.length > 0 ? (
				<Grid>
					{datas.map((item) => (
						<div
							style={{
								position: "relative",
							}}
						>
							<CollectionItem item={item} />
							<Button
								onClick={() =>
									handleShowModal(item.id, item.name)
								}
								title="Delete Collection"
							/>
						</div>
					))}
				</Grid>
			) : (
				<p>You dont have any collection</p>
			)}
		</Container>
	);
}
