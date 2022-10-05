import { adminFactory } from "../factories/adminFactory";

describe("Test admin login", () => {
	it("Test admin login with valid params", async () => {
		const admin = await adminFactory();

		cy.addAdmin(admin);

		cy.visit("http://localhost:3000");

		cy.get('[data-cy="name"]').type(admin.name);
		cy.get('[data-cy="password"]').type(admin.password);

		cy.intercept("POST", "http://localhost:5001/login").as("login");
		cy.get('[data-cy="submit"]').click();
		cy.wait("@login");

		cy.url().should("equal", "http://localhost:3000/home");
	});
});
