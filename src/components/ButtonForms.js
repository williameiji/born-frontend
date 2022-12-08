import Button from "@mui/material/Button";

export default function ButtonForms({
	text,
	variant = "outlined",
	size = "medium",
	type,
	cyId,
	onClick,
	css,
}) {
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
