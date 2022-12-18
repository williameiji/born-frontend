export type TNewStudentsForm = {
	setNewStudentData: React.Dispatch<React.SetStateAction<TStudent>>;
	submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	newStudentData: TStudent;
};

export type TStudent = {
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
