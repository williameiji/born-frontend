export type TSignupForm = {
	handleFormSignup: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submitForm: () => void;
};

export interface TSignup extends TSignupForm {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isModalOpen: boolean;
	goToLogin: () => void;
}
