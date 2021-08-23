import { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("A", "B", "C").map((categoria,index) => {
          return (
            <li className="lista-notas_item" key={index}>
              {/* <span>{categoria}</span> */}
              <CardNota></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
