import React, { Component } from "react";

export default class Formul2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      senha: "",
      error: "",
    };

    this.Cadastrar = this.Cadastrar.bind(this);
  }

  Cadastrar(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;

    if (nome !== "" && email !== "" && senha !== "") {
      alert(`Nome: ${nome} \Email: ${email} \Senha ${senha}`);
      this.setState({ error: "" });
    } else {
      this.setState({ error: "Ops! Paree que esta faltando algo... :(" });
    }
  }

  render() {
    return (
      <div>
        <h1>Novo Usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.Cadastrar}>
          <label>Nome :</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />
          <hr />
          <label>Email :</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <br />
          <hr />
          <label>Senha :</label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(ola) => this.setState({ senha: ola.target.value })}
          />
          <br />
          <hr />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
