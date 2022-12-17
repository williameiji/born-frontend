export type TLoginForm = {
	loginDataInput: TForms;
	submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
	setLoginDataInput: React.Dispatch<React.SetStateAction<TForms>>;
};

export interface TLogin extends TLoginForm {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isModalOpen: boolean;
	goToSignup: () => void;
}

type TForms = {
	name: string;
	password: string;
};
