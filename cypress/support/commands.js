// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("truncate", () => {
	cy.request("POST", "http://localhost:5001/e2e/cleardb", {});
});

Cypress.Commands.add("addAdmin", (admin) => {
	cy.request("POST", "http://localhost:5001/signup", admin);
});

Cypress.Commands.add("loginAdmin", (admin) => {
	const token = cy
		.request("POST", "http://localhost:5001/login", admin)
		.then((response) => {
			window.localStorage.setItem("token", response.body);
		});
	return token;
});
