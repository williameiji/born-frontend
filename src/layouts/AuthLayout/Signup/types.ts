export type TSignupForm = {
	signupDataInput: TForms;
	submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
	setSignupDataInput: React.Dispatch<React.SetStateAction<TForms>>;
};

export interface TSignup extends TSignupForm {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isModalOpen: boolean;
	goToLogin: () => void;
}

type TForms = {
	name: string;
	password: string;
	key: number;
};
