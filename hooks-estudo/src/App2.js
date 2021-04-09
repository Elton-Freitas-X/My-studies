import React, { useEffect, useCallback, useMemo, useState } from "react";
//AQUI SAO OS HOOKS COM useEFFECT
//Q É OS CICLOS DE VIDA
function App2() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  //componentDidiMount
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    //componentWillAmount
    //return () => {};
  }, []);

  //aqui é como se fosse o compenentUpdate
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  //use callBack
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [input, tarefas]);

  //use memo
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      {tarefas.map((tarefa) => (
        <li key={tarefa}>Nome: {tarefa}</li>
      ))}
      <br />
      <strong>Você tem {totalTarefas.length} tarefas!</strong>
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

export default App2;
