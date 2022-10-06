let BASE_URL;

if (process.env.REACT_APP_MODE === "DEV") {
	BASE_URL = process.env.REACT_APP_DEV_URI;
} else {
	BASE_URL = process.env.REACT_APP_BACKEND_URI;
}

const url = {
	login: `${BASE_URL}/login`,
	signup: `${BASE_URL}/signup`,
	addStudent: `${BASE_URL}/students`,
	searchStudent: `${BASE_URL}/students/search`,
	editInfo: `${BASE_URL}/students/edit`,
	deleteStudent: `${BASE_URL}/students`,
	payment: `${BASE_URL}/payments`,
};

export default url;
