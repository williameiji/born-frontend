export type TLoginForm = {
	handleFormLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submitForm: () => void;
};

export interface TLogin extends TLoginForm {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isModalOpen: boolean;
	goToSignup: () => void;
}
