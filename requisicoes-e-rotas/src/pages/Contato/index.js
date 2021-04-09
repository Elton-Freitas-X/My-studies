import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div>
      <h1>Fale conosco aqui esta o contato</h1>
      <Link to="/">Pagina Principal</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
