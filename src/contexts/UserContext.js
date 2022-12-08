import { createContext, useState } from "react";

import { getToken } from "../shared/getToken";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
	const [userData, setUserData] = useState(getToken());

	return (
		<UserContext.Provider value={{ setUserData, userData }}>
			{children}
		</UserContext.Provider>
	);
}
