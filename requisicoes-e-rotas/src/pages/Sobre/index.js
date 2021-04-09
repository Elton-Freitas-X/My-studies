import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div>
      <h1>Sobre este site</h1>
      <Link to="/">Pagina Principal</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}
