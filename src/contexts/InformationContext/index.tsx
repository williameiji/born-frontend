import React, { createContext, useState } from "react";
import { TEditForm } from "../../layouts/Dashboard/EditStudentInformation/types";

import { TInformationProvider } from "./types";

const InformationContext = createContext<TInformationProvider>({
	renderFinds: [],
	setRenderFinds: () => {},
});
export default InformationContext;

export function InformationProvider({ children }: React.PropsWithChildren) {
	const [renderFinds, setRenderFinds] = useState<TEditForm[]>([]);

	return (
		<InformationContext.Provider value={{ renderFinds, setRenderFinds }}>
			{children}
		</InformationContext.Provider>
	);
}
