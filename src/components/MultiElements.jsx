import React from 'react'

export default props => 
  <>
    <h1>Olá componente MUlTI</h1>
    <h1>Olá componente MUlTI</h1>
  </>

//Solução 3
// export default props => [
//   <h1>Olá componente MUlTI</h1>
//   <h1>Olá componente MUlTI</h1>

// ]

//Solução 2
// export default props => 
//   <React.Fragment>
//     <h1>Olá componente MUlTI</h1>
//     <h1>Olá componente MUlTI</h1>
//   </React.Fragment>

//Solução 1, Mais usada.
// export default props => 
//   <div>
//     <h1>Olá componente MUlTI</h1>
//     <h1>Olá componente MUlTI</h1>
//   </div>