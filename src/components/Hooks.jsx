import React, { useState, useEffect } from 'react'

export default props => {
  const [contador, setContador] = useState(100)
  const [status, setStatus] = useState('Par')

  useEffect(() => {
    contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
  }, [contador])

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{status}</h3>
      <button onClick={() => setContador( contador - 1)}>
        Decrementar - 1
      </button>
      <button onClick={() => setContador( contador + 1)}>
        Incrementar + 1
      </button>
    </div>
  )
}