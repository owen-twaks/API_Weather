import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  // create useState to initials it value
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
// initials one variable with API KEY
  const APIKEY = "1d4fa3de7246c16421c5d20269a49bb1";

  // we gonna call a function which will fetch us value data
  // here we using async key to fetch data from api sync using fetch key
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }
// create matter to handle the inputs
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
        // calling this handlechange and pass event on each?
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit

          
        </button>
      </form>
      {/* write condition statement */}
      {weather.data !== undefined ? (
        // pass data as props//
        <div>
          <DisplayWeather data={weather.data} /> 
        </div>
      ) : null}
    </div>
  );
}

export default Weather;