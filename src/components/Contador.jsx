import React, { Component } from 'react'

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial
  }

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 })
  }

  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 })
  }

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca })
  }

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <br/>
        <button onClick={() => this.alterarNumero(+10)}>Inc 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
      </div>
    )
  }
}

//Solução 1 para amarrar o this
  // constructor(props) {
  //   super(props)
  //   this.maisUm = this.maisUm.bind(this)
  // }

  //Solução 2 com arrow function (onClick)
  //<button onClick={() => this.maisUm()}>Inc</button>

  //Solução 3 com arrow function
  // maisUm = () => {
  //   console.log(this)
  // }