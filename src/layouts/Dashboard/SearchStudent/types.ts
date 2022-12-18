import { TEditForm } from "../EditStudentInformation/types";

export type TDeleteModal = {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setRenderFinds: React.Dispatch<React.SetStateAction<[]>>;
	student: { _id: string };
};

export type TModalStatus = {
	status: string;
	message: string;
	button: boolean;
};

export type TSearchStudent = {
	searchDataInput: { name: string };
	setSearchDataInput: React.Dispatch<React.SetStateAction<TSearch>>;
	showStudentInformation: (index: number) => void;
	searchByName: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	renderFinds: TEditForm[];
};

export type TShowInformation = {
	renderFinds: TEditForm[];
	setEditInformation: React.Dispatch<React.SetStateAction<TEditForm>>;
	setRenderFinds: React.Dispatch<React.SetStateAction<[]>>;
};

export type TEditInformation = {
	setRenderFinds: React.Dispatch<React.SetStateAction<[]>>;
};

export type TPayments = {
	value: string;
	reference: string;
	date: string;
};

type TSearch = {
	name: string;
};
