import Button from "@mui/material/Button";
import * as types from "./types";

export default function ButtonForms({
	text,
	variant = "outlined",
	size = "medium",
	type,
	cyId,
	onClick,
	css,
}: types.TButtonForms) {
	return (
		<Button
			variant={variant}
			size={size}
			type={type}
			data-cy={cyId}
			onClick={onClick}
			sx={css}
		>
			{text}
		</Button>
	);
}
