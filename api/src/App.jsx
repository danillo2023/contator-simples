import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  const adicionar = () =>{
    if(contador < 10){
    setContador( (contador) => contador + 1);
    }
  }
  const remover = () => {
    if( contador > 0){
    setContador( (contador) => contador - 1);
    }
  }

  return (
    <>

      <div className="container">
       <h1 className='mb-5'>App Contador</h1>

          <button className='btn btn-primary' onClick={adicionar} >  + </button>
          <span>{contador}</span>
          <button className='btn btn-danger' onClick={ remover } > - </button>
     
      </div>
    
    </>
  )
}

export default App
