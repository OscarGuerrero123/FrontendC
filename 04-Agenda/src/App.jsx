import ListItem from "./Listitem"
const persona = [
{
  nombre:'oscar guerrero',
  telefono:'1234567891',
  email: 'oscar@gmail.com'
},

{
  nombre:'jesus guerrero',
  telefono:'1234567892',
  email: 'jesus@gmail.com'
},
{
  nombre:'oscar guejo',
  telefono:'1234567893',
  email: 'guejo@gmail.com'
}

  
]

function App() {


  return (
   <div>
    <h1>Agenda</h1>
    <hr/>
    <ul>
    {
      persona.map((persona) => (
        <ListItem
        key={persona.email}
        nombre={persona.nombre}
        telefono={persona.telefono}
        email={persona.email}
        ></ListItem>
      ))
    }
    </ul>
   </div>

  )
}

export default App