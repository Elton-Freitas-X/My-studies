import React, { Component } from "react";

class Listas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Elton", curtidas: 10, comentarios: 2 },
        { id: 1, username: "Veve", curtidas: 110, comentarios: 22 },
        { id: 1, username: "Vertto", curtidas: 310, comentarios: 2 },
      ],
    };
  }

  render() {
    return <div>oiii</div>;
  }
}

export default Listas;
