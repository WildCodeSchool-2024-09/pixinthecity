import type { ReactNode } from "react";
import "./SubmitPhotoForm.css";
type PhotoType = {
  title: string;
  content: string;
  artist: string;
  dateoftheday: string;
  picture: File | null;
};

interface SubmitPhotoType {
  children?: ReactNode;
  defaultValue: PhotoType;
  onSubmit: (photo: FormData) => void;
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Défilement fluide
  });
};
function SubmitPhotoForm({
  children,
  defaultValue,
  onSubmit,
}: SubmitPhotoType) {
  return (
    <section className="post-photo-container">
      <h1>SOUMETTRE UNE ŒUVRE</h1>
      <form
        className="formphoto"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          onSubmit(formData);
        }}
      >
        <label htmlFor="title">TITRE DE L'ŒUVRE</label>
        <input
          className="form-photo-fields"
          placeholder="title"
          type="text"
          name="titre"
          defaultValue={defaultValue.title}
        />
        <label htmlFor="content">NOM DE L'ARTISTE</label>
        <input
          className="form-photo-fields"
          placeholder="artist"
          type="text"
          name="artiste"
          defaultValue={defaultValue.content}
        />
        <label htmlFor="artist">DATE</label>
        <input
          className="form-photo-fields"
          placeholder="date"
          type="text"
          name="date"
          defaultValue={defaultValue.artist}
        />
        <label htmlFor="date">DESCRIPTION</label>
        <input
          className="form-photo-fields"
          placeholder="description"
          type="text"
          name="description"
          defaultValue={defaultValue.dateoftheday}
        />
        <label htmlFor="date">AJOUTER PHOTO</label>

        <input type="file" name="picture" />
        <p className="star">*</p>
        <p className="auth-gcu">
          Conformément aux CGU acceptées lors de mon inscription, j'autorise le
          site à utiliser la ou les photos que je soumets.
        </p>
        <button className="post-photo-button" type="submit">
          {children}PROPOSER UNE ŒUVRE
        </button>
        <button
          type="button"
          id="button_up"
          onClick={scrollToTop} // Ajout du gestionnaire d'événement
        >
          <img
            src={"/src/assets/images/arrow_up.png"}
            alt="Retour_vers_le_haut"
            id="arrow_up"
          />
          <p>RETOUR VERS LE HAUT</p>
        </button>
      </form>
    </section>
  );
}
export default SubmitPhotoForm;
