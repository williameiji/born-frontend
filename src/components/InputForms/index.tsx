import TextField from "@mui/material/TextField";

import * as types from "./types";

export default function InputForms({
	size = "small",
	label,
	type = "text",
	cyId,
	onChange,
	inputValue,
	css,
	name,
	variant,
}: types.TInputForms) {
	return (
		<TextField
			data-cy={cyId}
			type={type}
			name={name}
			size={size}
			label={label}
			onChange={onChange}
			value={inputValue}
			sx={css}
			variant={variant}
		/>
	);
}
