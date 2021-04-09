import { useParams } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1>Confira nossos produtos abaixo!</h1>

      <span>Produto selecionado: {id}</span>
    </div>
  );
}
