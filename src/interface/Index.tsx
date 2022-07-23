import { ReactNode } from "react";

export interface IDetailAnime {
	id: number;
	title: {
		romaji: string;
		native: string;
	};
	description: string;
	coverImage: {
		medium: string;
		large: string;
		color: string;
	};
}
export interface IItemAnime {
	cover: string;
	title: string;
}
export interface ILocalData {
	id: number;
	name: string;
	cover: string;
	listId: number[];
}

export interface IContext {
	datas: ILocalData[];
	setDatas: (value: ILocalData[]) => void;
}

export interface IModal {
	show: boolean;
	setShow: (value: boolean) => void;
	children: ReactNode;
	header?: string;
}

export interface IPaginate {
	setPerPage: (value: number) => void;
	setPage: (value: number) => void;
	page: number;
	perPage: number;
}
