import React from "react";
import { DeleteButton } from "../styles/utils";
import IconDelete from "../assets/trash.svg";
export default function Button({
	onClick,
	title,
}: {
	onClick: () => void;
	title: string;
}) {
	return (
		<DeleteButton onClick={onClick} title={title}>
			<img src={IconDelete} alt="icon-delete" />
		</DeleteButton>
	);
}
