export function getToken() {
	const userData = localStorage?.getItem("token");

	if (userData !== null) {
		return userData;
	}
	return null;
}
