import useAsync from "../useAsync";

import * as loginApi from "../../services/authApi";

export default function useLogin() {
	const {
		loading: loginLoading,
		error: loginError,
		act: login,
	} = useAsync((data) => loginApi.login(data), false);

	return {
		loginLoading,
		loginError,
		login,
	};
}
