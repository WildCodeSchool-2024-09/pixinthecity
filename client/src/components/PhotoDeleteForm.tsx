import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type PhotoDeleteFormProps = {
  id: number;
  children?: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function PhotoDeleteForm({ id, children }: PhotoDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/api/photos/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/photos");
          }
        });
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
}

export default PhotoDeleteForm;
