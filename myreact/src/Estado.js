import React, { Component } from 'react';

class Estado extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: 'Mateus',
            contador: 0
        
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = 'Elton';
        this.setState(state);
    }

    diminuir(){
        let stateD = this.state;
        //se quiser parar no zero 
            if(stateD.contador === 0) {
                alert('OPA CHEGOU A ZERO!');
                return;
            }
        stateD.contador -= 1
        stateD.nome = 'fulano'
        this.setState(this.state)
    }

    render(){
        return (
            <div>
                <h1>Trabalahndo com statte</h1>

                    {this.state.nome}
                <h2>
                    <button onClick={this.diminuir}>-</button>
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h2>
            </div>
        );
    }
}


export default Estado;