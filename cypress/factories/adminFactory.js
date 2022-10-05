import { faker } from "@faker-js/faker";

export async function adminFactory() {
	return {
		name: faker.name.firstName(),
		password: faker.random.numeric(4),
		key: 40302010,
	};
}
