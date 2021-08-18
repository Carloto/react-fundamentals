import { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input placeholder="Título" type="text" />
        <textarea placeholder="Comece a escrever..."></textarea>
      </form>
    );
  }
}

export default FormularioCadastro;
