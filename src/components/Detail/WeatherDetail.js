import React from "react";

function WeatherDetail (props) {
    return (
    <div className="bottom">
    <div className="feels">
    {props.data.main ? <p className="bold">{props.data.main.feels_like.toFixed()}°F</p> : null}
      <p>Feels Like</p> 
    </div>
    <div className="humanidity">
    {props.data.main ? <p className="bold">{props.data.main.humidity}%</p> : null}
      <p>Humidity</p>
    </div>
    <div className="wind">
    {props.data.wind ? <p className="bold">{props.data.wind.speed.toFixed()}MPH</p> : null}
      <p>Wind Speed</p>
    </div>
  </div>
  )
}

export default WeatherDetail