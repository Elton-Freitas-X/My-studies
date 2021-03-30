import React, { Component } from "react";
import Feed from "./components/Feed";

class WorkingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Nino", curtidas: 1000, comentarios: 121 },
        { id: 2, username: "Vertto", curtidas: 1200, comentarios: 22 },
        { id: 3, username: "Bruno", curtidas: 1011, comentarios: 222 },
        { id: 3, username: "Stranger", curtidas: 1, comentarios: 0 },
      ],
    };
  }
  //NA DIV ABAIXO O ITEM PASSADO POR PARAMETRO É
  //O OBJETO DENTRO DO FEED

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              key={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default WorkingList;
