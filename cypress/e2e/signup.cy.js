import { adminFactory } from "../factories/adminFactory";

beforeEach(() => {
	cy.truncate();
});

describe("Test admin signup", () => {
	it("Test if signup an admin with valid params", async () => {
		const admin = await adminFactory();

		cy.visit("http://localhost:3000");

		cy.get('[data-cy="signup"]').click();

		cy.get('[data-cy="name"]').type(admin.name);
		cy.get('[data-cy="password"]').type(admin.password);
		cy.get('[data-cy="key"]').type(admin.key);

		cy.intercept("POST", "http://localhost:5001/signup").as("signup");
		cy.get('[data-cy="submit"]').click();
		cy.wait("@signup");

		cy.url().should("equal", "http://localhost:3000/");
	});
});
