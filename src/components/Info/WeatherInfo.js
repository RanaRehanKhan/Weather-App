import React from "react";

function WeatherInfo(props) {
    return (
    <div className="top">
    <div className="location">
      <p>{ props.data.name}</p>
    </div>
    <div className="temp">
      {props.data.main ? <h1>{props.data.main.temp.toFixed()}°F</h1> : null}
    </div>
    <div className="description">
      {props.data.weather ? <p>{props.data.weather[0].main}</p> : null}
    </div>
  </div>
  )
}

export default WeatherInfo