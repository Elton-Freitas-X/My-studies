import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Estado from "./Estado";
import CiclodeVida from "./CiclodeVida";
import Eventos from "./Eventos";
import RenderizaCondicional from "./RenderizaCondicional";
import WorkingList from "./WorkingList";
import Listas from "./Listas";

ReactDOM.render(
  <React.StrictMode>
    <Listas />
  </React.StrictMode>,
  document.getElementById("root")
);
