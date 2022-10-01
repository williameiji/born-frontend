export default function LoginForm({ loginDataInput, handleFormLogin, login }) {
	return (
		<>
			<form onSubmit={login}>
				<input
					type="text"
					name="name"
					placeholder="Nome"
					onChange={(e) => handleFormLogin(e)}
					value={loginDataInput.name}
					required
				></input>
				<input
					type="password"
					name="password"
					placeholder="Senha"
					onChange={(e) => handleFormLogin(e)}
					value={loginDataInput.password}
					required
				></input>
				<button type="submit">Entrar</button>
			</form>
		</>
	);
}
