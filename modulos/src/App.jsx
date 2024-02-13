import ListItem from "./Listitem"

const links =[
  {
    name: 'Google',
    url: 'http://google.com'
  },
  {
    name: 'Facebook',
    url: 'http://facebook.com'
  },
  {
    name: 'Twitter',
    url: 'http://twitter.com'
  }
]

function App(){

return(
  <div>
    <hl>Links</hl>
    <hr />
    <ul>
      {
        links.map((link) => (
          <ListItem
          key={link.name}
          name={link.name}
          url={link.url}
          ></ListItem>
        ))
      }
      {/*{links.map((link) => (<li key={link.name}><a href={link.url}></a></li>))}*/}
    </ul>
  </div>
)
}

export default App
