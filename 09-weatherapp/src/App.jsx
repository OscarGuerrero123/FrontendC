import WeatherCard from "./components/weatherCard"
import './assets/CSS/index.css'
import SearchCity from "./components/SearchCity"
import { useState } from "react"



const App = ()  =>{
  const [cities, setCities] = useState (["Tuxtepec"])

  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr />
      <SearchCity cities={cities} setCities={setCities}/>
    <hr />
    <div className="row">
      <div className="col">
        {
          cities.map((city, index) => (

            <WeatherCard key={index} city={city}/>
          ))
        }

      </div>
    </div>
    </div>
  )
}

export default App