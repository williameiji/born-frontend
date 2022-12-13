import React, { createContext, useState } from "react";

import * as types from "./types";

const ModalContext = createContext<types.IModal | null>(null);
export default ModalContext;

export function ModalProvider({ children }: React.PropsWithChildren) {
	const [modalStatus, setModalStatus] = useState<types.TStatus | null>(null);

	const statusModal: types.IModal = {
		modalStatus,
		setModalStatus,
	};

	return (
		<ModalContext.Provider value={statusModal}>
			{children}
		</ModalContext.Provider>
	);
}
