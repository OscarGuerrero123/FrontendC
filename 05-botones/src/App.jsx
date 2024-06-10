import {useState} from 'react'

function App() {
const [contador, setContador]=useState(0)

const handleButtonIncrementar =()=> {
  setContador(contador + 1)

}
  return (
    <div>
      <hl>Contador</hl>
      <hr />
      <h2>(contador)</h2>
      <button onClick={handleButtonIncrementa}>Icrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrmentar</button>
      <button onClick={() => setContador(0)}>Resetear</button>
    </div>
  )
    
  }
export default App
