import InputForms from "../../../components/InputForms";
import ButtonForms from "../../../components/ButtonForms";

export default function SignupForm({ handleFormSignup, submitForm }) {
	return (
		<>
			<form onSubmit={submitForm}>
				<InputForms
					cyId="name"
					name="name"
					label="Nome"
					variant="outlined"
					onChange={(e) => handleFormSignup(e)}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="password"
					name="password"
					label="Senha"
					variant="outlined"
					type="password"
					onChange={(e) => handleFormSignup(e)}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="key"
					label="Chave da empresa"
					name="key"
					variant="outlined"
					onChange={(e) => handleFormSignup(e)}
					css={{ mb: "15px" }}
				/>
				<ButtonForms text="Cadastrar" type="submit" data-cy="submit" />
			</form>
		</>
	);
}
