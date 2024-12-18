function Header() {
  return (
    <>
      <nav>
        <img src="http://logo.fr" alt="Logo" />
        <img src="http://profil.fr" alt="IconeProfil" />
        <p>Profil</p>
        <div className="clicProfil">
          <p>Voir mon profil</p>
          <p>Modifier mon profil</p>
          <p>Me déconnecter</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
