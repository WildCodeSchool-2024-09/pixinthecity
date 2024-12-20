function MdpOublie() {
  return (
    <>
      <h2>Mot de passe oublié</h2>
      <img src="http://logo.fr" alt="Logo" />

      <form>
        <label htmlFor="identifiant">Email</label>
        <input />

        <button type="submit" className="Homebutton">
          Renvoyer un mot de passe temporaire
        </button>
      </form>
    </>
  );
}

export default MdpOublie;
