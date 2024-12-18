function Login() {
  return (
    <>
      <h2>Page Login</h2>
      <img src="http://logo.fr" alt="Logo" />

      <form>
        <label htmlFor="identifiant">Email</label>
        <input />
        <label htmlFor="password">Mot de passe</label>
        <input />
        <button type="submit">Connexion</button>
      </form>
      <p>ou</p>
      <button type="button">Créer mon compte</button>
      <p>ou</p>
      <button type="button">Mot de passe oublié</button>
      <p>ou</p>
      <button type="button">Rester en tant que visiteur (dommage !)</button>
    </>
  );
}

export default Login;
