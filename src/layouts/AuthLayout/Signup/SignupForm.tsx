import InputForms from "../../../components/InputForms";
import ButtonForms from "../../../components/ButtonForms";

import * as types from "./types";

export default function SignupForm({
	signupDataInput,
	submitForm,
	setSignupDataInput,
}: types.TSignupForm) {
	return (
		<>
			<form onSubmit={submitForm}>
				<InputForms
					cyId="name"
					name="name"
					label="Nome"
					variant="outlined"
					onChange={(e) =>
						setSignupDataInput({
							...signupDataInput,
							name: e.target.value,
						})
					}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="password"
					name="password"
					label="Senha"
					variant="outlined"
					type="password"
					onChange={(e) =>
						setSignupDataInput({
							...signupDataInput,
							password: e.target.value,
						})
					}
					css={{ mb: "15px" }}
				/>
				<InputForms
					cyId="key"
					label="Chave da empresa"
					name="key"
					variant="outlined"
					onChange={(e) =>
						setSignupDataInput({
							...signupDataInput,
							key: Number(e.target.value),
						})
					}
					css={{ mb: "15px" }}
				/>
				<ButtonForms text="Cadastrar" type="submit" data-cy="submit" />
			</form>
		</>
	);
}
