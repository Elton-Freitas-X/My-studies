import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div>
      <h1>Hummm... parece que essa pagina não existe!</h1>

      <span>Você pode estar procurando:</span>
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}
