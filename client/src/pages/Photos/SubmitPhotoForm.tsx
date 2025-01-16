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
function SubmitPhotoForm({
  children,
  defaultValue,
  onSubmit,
}: SubmitPhotoType) {
  return (
    <form
      className="formphoto"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
      }}
    >
      <label htmlFor="title">Titre de l'oeuvre</label>
      <input
        placeholder="title"
        type="text"
        name="title"
        defaultValue={defaultValue.title}
      />
      <label htmlFor="content">Description</label>
      <input
        placeholder="content"
        type="text"
        name="content"
        defaultValue={defaultValue.content}
      />
      <label htmlFor="artist">Artiste</label>
      <input
        placeholder="tartist"
        type="text"
        name="artist"
        defaultValue={defaultValue.artist}
      />
      <label htmlFor="date">Date</label>
      <input
        placeholder="date"
        type="text"
        name="date"
        defaultValue={defaultValue.dateoftheday}
      />
      <input type="file" name="picture" />
      <button type="submit">{children}</button>
    </form>
  );
}
export default SubmitPhotoForm;
