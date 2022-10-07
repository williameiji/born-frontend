import { useState, useEffect, Fragment } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import url from "../Services/url";

export default function AsynchronousInput({ getStudentInformation }) {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const loading = open && options.length === 0;

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			const response = await axios.get(url.students + "/search/all");

			if (active) {
				setOptions(response.data);
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
			isOptionEqualToValue={(option, value) => option.name === value.name}
			getOptionLabel={(option) => option.name}
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
