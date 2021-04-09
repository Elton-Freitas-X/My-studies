import React, { useState } from "react";
//AQUI SAO OS HOOKS COM USESTATE
function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }
  // O "...TAREFAS" esta sem nada pq eu tirei as tarefas do
  //useState dele

  return (
    <div>
      {tarefas.map((tarefa) => (
        <li key={tarefa}>Nome: {tarefa}</li>
      ))}
      <input
        type="text"
        value={input}
        onChange={(evento) => setInput(evento.target.value)}
      />
      <button type="submit" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
