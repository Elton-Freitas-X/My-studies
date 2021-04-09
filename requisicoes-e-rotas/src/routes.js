import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produto from "./pages/Produto";

import Header from "./components/Header";

import Erro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
        <Route path="/produto/id:" component={Produto} />

        <Route exact path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

//o exact ali é para so aparecer exatamente aquele
//component (pagina)

// e o Switch faz aparecer uma paginar por vez

//A ROTA DE ERRO TEM Q SER SEMPRE A ULTIMA
