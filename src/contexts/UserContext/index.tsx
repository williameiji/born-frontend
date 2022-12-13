import { createContext, PropsWithChildren, useState } from "react";

import { getToken } from "../../shared/getToken";
import * as types from "./types";

const UserContext = createContext<types.IUserContext | null>(null);
export default UserContext;

export function UserProvider({ children }: PropsWithChildren) {
	const [userData, setUserData] = useState(getToken());

	const userToken: types.IUserContext = {
		userData,
		setUserData,
	};

	return (
		<UserContext.Provider value={userToken}>{children}</UserContext.Provider>
	);
}
