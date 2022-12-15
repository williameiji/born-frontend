import { useState, useEffect, Fragment } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { getAllStudents } from "../../../services/studentsApi";
import { TAsynchronousInput } from "./types";

export default function AsynchronousInput({
	getStudentInformation,
}: TAsynchronousInput) {
	const [open, setOpen] = useState<boolean | undefined>(false);
	const [options, setOptions] = useState<[]>([]);
	const loading = open && options.length === 0;

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			const response = await getAllStudents();

			if (active) {
				setOptions(response);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<Autocomplete
			data-cy="name"
			sx={{ width: "100%", height: "30px", mb: "20px" }}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			onChange={(event, value) => getStudentInformation(value)}
			isOptionEqualToValue={(
				option: { name: string },
				value: { name: string }
			) => option.name === value.name}
			getOptionLabel={(option: { name: string }) => option.name}
			options={options}
			loading={loading}
			renderInput={(params) => (
				<TextField
					required
					{...params}
					label="Nome do aluno"
					InputProps={{
						...params.InputProps,

						endAdornment: (
							<Fragment>
								{loading ? (
									<CircularProgress color="inherit" size={10} />
								) : null}
								{params.InputProps.endAdornment}
							</Fragment>
						),
					}}
				/>
			)}
		/>
	);
}
