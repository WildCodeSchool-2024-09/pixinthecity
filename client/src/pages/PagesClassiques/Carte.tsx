import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Carte() {
  return (
    <>
      <h2>Carte</h2>
      <header>
        <header>
          <Header />
        </header>
      </header>
      <main>
        <h2>
          <Carte />
        </h2>

        <section className="streetArtPhotos">
          <figure>
            <img src="\src\assets\images\Ememem.jpg" alt="Mosaique Ememem" />
            <h3>Titre : Mosaique Ememem, rue de la bourse, Lyon 2e</h3>
            <h4>Description :</h4>
            <p>
              À partir de petit carreaux, l'artist urban Ememem construit des
              mosaïques ou des "pancements de trous" (comme il les appelle) pour
              vétir la rue des couleurs. Dans ce mosaïque en blanc et noir nous
              trouvons une sorte de jeu qui fait penser aux mots fléchés. Pour
              connaître plus sur cet artiste, rdv dans son site web :
              https://www.ememem-flacking.com/ et sur ses réseaux sociaux.
            </p>
            <img
              src="\src\assets\images\faile-morand.jpg"
              alt="collage-morand"
            />
            <h3>Titre : Hommage à Keith Haring, pont Morand, Lyon 1er</h3>
            <h4>Description :</h4>
            <p>
              Dans le cadre de la Boucle du Ruban Rouge et de la Conférence du
              Fonds Mondial de lutte contre le sida qui s'est déroulé à Lyon les
              9 et 10 octobre 2019, (RED) et la Métropole se sont associés pour
              développer une campagne de Street Art. "Pour cette œuvre, Faile
              rend hommage à Keith Haring, artiste légendaire, activement engagé
              dans la lutte contre le sida, révélé aux Lyonnais lors d’une
              rétrospective présentée en 2008, au Musée d’Art Contemporain".
            </p>
            <img
              src="\src\assets\images\kalouf-fresque.jpg"
              alt="fresque-ara"
            />
            <h3>
              Titre : Vol du Ara, Kalouf et Chopper, rue Villon, Lyon 8ème
            </h3>
            <h4>Description :</h4>
            <p>
              « L’œuvre représente le symbole de liberté au travers de ce ARA
              vert (ARA MILITARIS). L’espèce est menacée d’extinction à l’état
              sauvage à cause de son plumage vivement coloré et victime du
              trafic d’animaux. Il est souhaitable pour les générations futures
              que nous préservions le vivant. Les oiseaux jouent un rôle très
              important et sont indispensables pour la vie sur terre. Laisse la
              nature intacte, n’y prends rien sauf une photo. » KALOUF
            </p>
          </figure>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Carte;
