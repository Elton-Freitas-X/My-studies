import React, { Component } from "react";

class CiclodeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00",
    };
  }

  componentDidMount() {
    //depois q o component é montado ele pode rodar essa função
    //ele é rodado uma unica vez

    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  //quando um component for atualizado ele é executado
  componentDidUpdate() {
    //console.log('atualizou!!')
    //como nosso componendidMount atualiza de 1 em um segundo
    //esse component é atualizado tbm de um em 1 segundo
  }

  //shouldComponentUpdate(){
  //esse component deve atualizar?
  //se ele mudou o estado e vc quer atualizar
  //}

  render() {
    return (
      <div>
        <h1>Ciclo de Vida dos componentes {this.state.hora}</h1>
      </div>
    );
  }
}

export default CiclodeVida;

/*Então como vimos na aula nos ciclos de vida do componente temos:

Inicialização

Montagem

Atualização

Desmontagem

- Inicialização

Nesta fase, o componente React se prepara para sua inicialização, 
configurando os estados iniciais e props padrões se houverem.

- Montagem

Depois de preparar com todas as necessidades básicas, 
estado e props, o nosso Componente React está pronto para ser montado 
no DOM do navegador.

componentWillMount() É executado quando o componente estiver prestes 
a ser montado no DOM da página. Assim, após esse método ser executado o 
componente irá criar o nó no navegador. Todas as coisas que você deseja 
fazer antes do componente ser montado, devem ser definidas aqui.

componentDidMount() Este é o método que é executado depois que 
o componente foi montado no DOM

- Atualização

Esta fase começa quando o componente React já nasceu no 
navegador e cresce recebendo novas atualizações. O componente 
pode ser atualizado de duas maneiras, através do envio de novas 
props ou a atualização do seu estado.

componentDidUpdate() é chamado imediatamente após a atualização.

componentWillUpdate() É executado somente quando 
shouldComponentUpdatedevolver true.

- Desmontagem

Nesta fase, o componente não é mais necessário e será 
desmontado do DOM. O método que se chama nesta fase é o:

componentWillUnmount() */
