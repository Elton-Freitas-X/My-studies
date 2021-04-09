import React, { useState } from "react";

function Contador() {
  //Declarar uma nova variável de state, na qual chamaremos de contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>You clicked {contador} times</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default Contador;
