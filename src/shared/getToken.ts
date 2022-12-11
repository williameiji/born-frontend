export function getToken(): string | null {
	const userData: string | null = localStorage?.getItem("token");

	if (userData !== null) {
		return userData;
	}
	return null;
}
