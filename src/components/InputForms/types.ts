export type TInputForms = {
	size?: "medium" | "small" | undefined;
	label: string;
	type?: string;
	cyId: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputValue?: string;
	css?: object;
	name: string;
	value?: string;
	variant?: "outlined" | "standard" | "filled" | undefined;
	required?: boolean;
};
