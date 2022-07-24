import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IAddCollection, IContext } from "../interface/Index";
import {
	ButtonSave,
	ContainerAddNewCollection,
	InputName,
	WarnText,
} from "../styles/DetailAnime";
import Modal from "./Modal";

export default function ModalAddCollection({
	setOpen,
	open,
	name,
	setName,
}: IAddCollection) {
	const { datas, setDatas } = useContext<IContext>(AppContext);
	const [warnNameCollection, setWarnNameCollection] = useState("");

	const handleAddNewCollection = async () => {
		const nameList = datas.map((item) => item.name);

		if (/^\s+$/g.test(name) || name == "") {
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
		setOpen(false);
		setName("");
	};
	return (
		<Modal setShow={setOpen} show={open} header="Add new Collection">
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
	);
}
