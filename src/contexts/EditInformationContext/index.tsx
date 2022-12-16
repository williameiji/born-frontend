import React, { createContext, useState } from "react";

import { TEditProvider } from "./types";

const EditContext = createContext<TEditProvider>({
	editInformation: {
		_id: "",
		date: "",
		value: "",
		name: "",
		cpfStudent: "",
		rgStudent: "",
		nameResp: "",
		cpfResp: "",
		rgResp: "",
		adress: "",
		number: "",
		district: "",
		city: "",
		phone: "",
		email: "",
	},
	setEditInformation: () => {},
});
export default EditContext;

export function EditProvider({ children }: React.PropsWithChildren) {
	const [editInformation, setEditInformation] = useState({
		_id: "",
		date: "",
		value: "",
		name: "",
		cpfStudent: "",
		rgStudent: "",
		nameResp: "",
		cpfResp: "",
		rgResp: "",
		adress: "",
		number: "",
		district: "",
		city: "",
		phone: "",
		email: "",
	});

	return (
		<EditContext.Provider value={{ editInformation, setEditInformation }}>
			{children}
		</EditContext.Provider>
	);
}
