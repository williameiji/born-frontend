export type TEditStudentForm = {
	handleEditForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submit: () => void;
	editInformation: TEditForm;
};

type TEditForm = {
	date: string;
	value: string;
	name: string;
	cpfStudent: string;
	rgStudent: string;
	nameResp: string;
	cpfResp: string;
	rgResp: string;
	adress: string;
	number: string;
	district: string;
	city: string;
	phone: string;
	email: string;
};
