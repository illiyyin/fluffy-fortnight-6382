import React from "react";
import { CollectionItem } from "../../styles/DetailAnime";
import IconCheck from "../../assets/check.svg";

export default function Item({
	name,
	selected,
}: {
	name: string;
	selected: boolean;
}) {
	return (
		<CollectionItem selected={selected}>
			<p>{name}</p>
			{selected && <img src={IconCheck} alt="icon-check" />}
		</CollectionItem>
	);
}
