import { adminFactory } from "../factories/adminFactory";
import { studentFactory } from "../factories/studentFactory";

let admin;
let student;

beforeEach(async () => {
	admin = await adminFactory();
	student = await studentFactory();
});

describe("Test search students", () => {
	it("Test if search student by name", () => {
		cy.truncate();

		cy.addAdmin(admin);
		cy.loginAdmin({ name: admin.name, password: admin.password }).then(
			(response) => {
				cy.request({
					method: "POST",
					url: "http:localhost:5001/students",
					body: student,
					headers: {
						Authorization: `Bearer ${response.body}`,
					},
				});
			}
		);

		cy.visit("http://localhost:3000/home");

		cy.get('[data-cy="search"]').click();
		cy.get('[data-cy="name"]').type(student.name);

		cy.intercept("GET", "http://localhost:5001/students/search/*").as("search");
		cy.get('[data-cy="submit"]').click();
		cy.wait("@search");

		cy.get('[data-cy="students"]').should("have.length", 1);
	});
});
