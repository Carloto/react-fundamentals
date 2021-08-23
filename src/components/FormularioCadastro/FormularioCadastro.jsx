import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input className="form-cadastro_input" placeholder="Título" type="text" />
        <textarea className="form-cadastro_input" rows={15} placeholder="Comece a escrever..."></textarea>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
