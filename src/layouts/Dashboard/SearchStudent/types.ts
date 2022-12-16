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
	handleFormSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	showStudentInformation: (index: number) => void;
	searchByName: () => void;
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
