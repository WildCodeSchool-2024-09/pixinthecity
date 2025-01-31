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

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth", // Défilement fluide
//   });
// };

function SubmitPhotoForm({
  children,
  defaultValue,
  onSubmit,
}: SubmitPhotoType) {
  const today = new Date().toISOString().split("T")[0];
  const formattedDate = new Date().toLocaleDateString("fr-FR"); // Format de la date au format DD-MM-YYYY

  return (
    <section className="post-photo-container">
      <h1 id="subm_photo">SOUMETTRE UNE ŒUVRE</h1>
      <form
        className="formphoto"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          formData.append("date", today);
          formData.append("dateoftheday", formattedDate); // Ajouter la date formatée
          onSubmit(formData);
        }}
      >
        <label htmlFor="title">TITRE DE L'ŒUVRE</label>
        <input
          className="form-photo-fields"
          placeholder="TITRE DE L'ŒUVRE"
          type="text"
          name="title"
          defaultValue={defaultValue.title}
        />
        <label htmlFor="artist">NOM DE L'ARTISTE</label>
        <input
          className="form-photo-fields"
          placeholder="NOM DE L'ARTISTE"
          type="text"
          name="artist"
          defaultValue={defaultValue.artist}
        />
        <label htmlFor="content">DESCRIPTION</label>
        <textarea
          className="form-photo-fields"
          rows={5}
          cols={50}
          placeholder="DESCRIPTION"
          name="content"
          defaultValue={defaultValue.content}
        />

        <label htmlFor="date">AJOUTER PHOTO*</label>
        <input type="file" name="picture" />

        <p className="auth-gcu">
          <span className="star">*</span> Conformément aux CGU acceptées lors de
          mon inscription, j'autorise le site à utiliser la ou les photos que je
          soumets.
        </p>
        <button className="post-photo-button" type="submit">
          {children}PROPOSER UNE ŒUVRE
        </button>
        {/* <div className="button_hiden">
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
        </div> */}
      </form>
    </section>
  );
}

export default SubmitPhotoForm;
