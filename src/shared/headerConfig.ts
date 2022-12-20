import { getToken } from "./getToken";

export default function headerConfig() {
	return {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};
}
