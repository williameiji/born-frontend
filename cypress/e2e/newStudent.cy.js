import { adminFactory } from "../factories/adminFactory";
import { studentFactory } from "../factories/studentFactory";

let admin;
let student;

beforeEach(async () => {
	admin = await adminFactory();
	student = await studentFactory();
});

describe("Test add new student", () => {
	//before run this test must disable 'cpf' validation on "NewStudentScreen"
	it("Add new student with valid params", () => {
		cy.truncate();

		let token;

		cy.addAdmin(admin);
		cy.loginAdmin({ name: admin.name, password: admin.password }).then(
			(response) => {
				token = response.body;
			}
		);

		cy.visit("http://localhost:3000/home");

		cy.get('[data-cy="newStudent"]').click();

		cy.get('[data-cy="date"]').type(student.date);
		cy.get('[data-cy="value"]').type(student.value);
		cy.get('[data-cy="name"]').type(student.name);
		cy.get('[data-cy="cpfStudent"]').type(student.cpfStudent);
		cy.get('[data-cy="rgStudent"]').type(student.rgStudent);
		cy.get('[data-cy="nameResp"]').type(student.nameResp);
		cy.get('[data-cy="cpfResp"]').type(student.cpfResp);
		cy.get('[data-cy="rgResp"]').type(student.rgResp);
		cy.get('[data-cy="adress"]').type(student.adress);
		cy.get('[data-cy="number"]').type(student.number);
		cy.get('[data-cy="district"]').type(student.district);
		cy.get('[data-cy="city"]').type(student.city);
		cy.get('[data-cy="phone"]').type(student.phone);
		cy.get('[data-cy="email"]').type(student.email);

		cy.intercept("POST", "http://localhost:5001/students").as("newStudent");
		cy.get('[data-cy="send"]').click();
		cy.wait("@newStudent");

		cy.url().should("equal", "http://localhost:3000/students");
	});
});
