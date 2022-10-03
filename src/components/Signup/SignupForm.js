import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function SignupForm({ handleFormSignup, signup, blockInput }) {
	return (
		<>
			<form onSubmit={signup}>
				<TextField
					data-cy="name"
					name="name"
					label="Nome"
					variant="outlined"
					size="small"
					onChange={(e) => handleFormSignup(e)}
					sx={{ mb: "15px" }}
					disabled={blockInput}
				/>
				<TextField
					data-cy="password"
					name="password"
					label="Senha"
					variant="outlined"
					size="small"
					type="password"
					onChange={(e) => handleFormSignup(e)}
					sx={{ mb: "15px" }}
					disabled={blockInput}
				/>
				<TextField
					data-cy="key"
					label="Chave da empresa"
					name="key"
					variant="outlined"
					size="small"
					onChange={(e) => handleFormSignup(e)}
					sx={{ mb: "15px" }}
					disabled={blockInput}
				/>
				<Button variant="outlined" size="medium" type="submit" data-cy="signup">
					Cadastrar
				</Button>
			</form>
		</>
	);
}