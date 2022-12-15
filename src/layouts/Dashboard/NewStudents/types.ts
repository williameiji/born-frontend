export type TNewStudentsForm = {
	handleNewStudent: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submit: () => void;
	newStudentData: TNewStudent;
};

type TNewStudent = {
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
