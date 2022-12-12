export type TButtonForms = {
	text: string;
	variant?: "text" | "outlined" | "contained" | undefined;
	size?: "medium" | "small" | "large" | undefined;
	type?: "button" | "submit" | "reset" | undefined;
	cyId?: string;
	css?: object;
	onClick: () => void;
};
