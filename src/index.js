import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/FirstComponent'
// import { CompA, CompB } from './components/TwoComponents'
// import MultiElementos from './components/MultiElements'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hooks from './components/Hooks'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Hooks/>
    {/* <Contador numeroInicial={100}/> */}
    {/* <ComponenteClasse valor="Sou o componente Classe!" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Arruda">
      <Membro nome="Carlos" />
      <Membro nome="Maria" />
    </Familia> */}
    {/* <FamiliaSilva/> */}
    {/* <MultiElementos/> */}
    {/* <CompA valor="Olá eu sou A"/>
    <CompB valor="Olá eu sou B"/> */}
  {/* <PrimeiroComponente valor ='Bom dia' /> */}
  </div>
  , elemento)