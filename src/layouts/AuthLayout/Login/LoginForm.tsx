import InputForms from "../../../components/InputForms";
import ButtonForms from "../../../components/ButtonForms";

import * as types from "./types";

export default function LoginForm({
	handleFormLogin,
	submitForm,
}: types.TLoginForm) {
	return (
		<>
			<form onSubmit={submitForm}>
				<InputForms
					cyId="name"
					name="name"
					label="Nome"
					variant="outlined"
					onChange={(e) => handleFormLogin(e)}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="password"
					name="password"
					label="Senha"
					variant="outlined"
					type="password"
					onChange={(e) => handleFormLogin(e)}
					css={{ mb: "15px" }}
				/>
				<ButtonForms text="Entrar" type="submit" data-cy="submit" />
			</form>
		</>
	);
}
