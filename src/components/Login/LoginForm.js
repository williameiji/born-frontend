import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function LoginForm({ handleFormLogin, login }) {
	return (
		<>
			<form onSubmit={login}>
				<TextField
					data-cy="name"
					name="name"
					label="Nome"
					variant="outlined"
					size="small"
					onChange={(e) => handleFormLogin(e)}
					sx={{ mb: "15px" }}
				/>
				<TextField
					data-cy="password"
					name="password"
					label="Senha"
					variant="outlined"
					size="small"
					type="password"
					onChange={(e) => handleFormLogin(e)}
					sx={{ mb: "15px" }}
				/>
				<Button variant="outlined" size="medium" type="submit" data-cy="submit">
					Entrar
				</Button>
			</form>
		</>
	);
}
