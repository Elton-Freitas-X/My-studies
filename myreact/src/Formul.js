import React, { Component } from "react";

export default class Formul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: "Elton",
        email: "Elznh@lindo.com",
        senha: "123456",
        sexo: "masculino",
      },
    };
    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(evento) {
    let form1 = this.state.form;
    form1[evento.target.name] = evento.target.value;
    this.setState({ form: form1 });
    //botei o numero no form para saber qual é a variavel do form
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input
          type="text"
          name="nome"
          value={this.state.form.nome}
          onChange={this.dadosForm}
        />
        <br />
        Email :
        <input
          type="email"
          name="email"
          placeholder="seu Email"
          value={this.state.form.email}
          onChange={this.dadosForm}
        />
        <br />
        Senha :
        <input
          type="password"
          name="senha"
          placeholder="sua Senha"
          value={this.state.form.senha}
          onChange={this.dadosForm}
        />
        <br />
        Sexo:
        <select
          name="sexo"
          value={this.state.form.sexo}
          onChange={this.dadosForm}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
  }
}
