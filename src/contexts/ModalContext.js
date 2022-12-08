import { createContext, useState } from "react";

const ModalContext = createContext();
export default ModalContext;

export function ModalProvider({ children }) {
	const [modalStatus, setModalStatus] = useState(null);

	return (
		<ModalContext.Provider value={{ modalStatus, setModalStatus }}>
			{children}
		</ModalContext.Provider>
	);
}
