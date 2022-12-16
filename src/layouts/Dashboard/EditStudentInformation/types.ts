export type TEditStudentForm = {
	setEditInformation: React.Dispatch<React.SetStateAction<TEditForm>>;
	submit: (e: any) => Promise<void>;
	editInformation: TEditForm;
};

export type TEditForm = {
	_id: string;
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
