import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./components/Info/WeatherInfo";
import WeatherDetail from "./components/Detail/WeatherDetail";
import Search from "./components/Search/Serach";
 
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('lahore')
  useEffect(() => {
    getData()
  }, [])
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=090063c1b5204bb4f96dbffbfa2105c9`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      getData();
    } 
  }
  const getData = () => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
    setLocation('')
  }

  return (
    <div className="app">
      {/* <Search value={location} setLocation= {setLocation()} searchLocation={searchLocation} /> */}
        
    <div className="search">
    <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
        </div>
      <div className="container">
        <WeatherInfo data={data} />

        {!data.name && 
          <WeatherDetail data= { data } />
        }

      </div>
    </div>
  );
}

export default App;
