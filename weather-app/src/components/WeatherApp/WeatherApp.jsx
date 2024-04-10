// REACT
import React, { useState } from "react";
// CSS
import './WeatherApp.css';
// ICONS
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';
import snow_icon from '../assets/snow.png';
import drizzle_icon from '../assets/drizzle.png';
import cloud_icon from '../assets/cloud.png';

// WEATHER APP
const WeatherApp = () => {
// API KEY
let api_key = 'b6a61e5b7a18005040feaa658d3a6eed';
// WEATHER ICON  
const [weaIcon,setWeaIcon] = useState(cloud_icon);

// API SEARCH ASYNC FUNCTION
const search = async () => {
    // CITY INPUT 
    const element = document.getElementsByClassName("cityInput");

    if(element[0].value === ""){
        return 0;
    } else {
        // URL
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        // RESPONSE & DATA  
        let response = await fetch(url);
        let data = await response.json();
        // GRABBING DESCRIPTION 
        const humidity = document.getElementsByClassName('humidity-percentage');
        const wind = document.getElementsByClassName('wind-rate'); 
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        // DESCRIPTION INNER TEXT
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) +  " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " °F";
        location[0].innerHTML = data.name;
        // SETTING WEATHER ICON
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWeaIcon(clear_icon); // CLEAR WEATHER
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWeaIcon(cloud_icon); // CLOUDY WEATHER
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWeaIcon(drizzle_icon); // DRIZZLE WEATHER
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWeaIcon(drizzle_icon); // DRIZZLE WEATHER
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWeaIcon(rain_icon); // RAIN WEATHER
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWeaIcon(rain_icon); // RAIN WEATHER
        } else if (data.weather[0].icon === "14d" || data.weather[0].icon === "14n"){
            setWeaIcon(cloud_icon); // CLOUDY WEATHER
        } else {
            setWeaIcon(clear_icon); // CLEAR WEATHER
        }
    }

}


    return (
        /* CONTAINER */
        <div className="container">
            {/* TOP BAR */}
            <div className="top-bar">
                {/* CITY INPUT */}
                <input type="text" className="cityInput" placeholder="Search" />
                {/* SEARCH ICON */}
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="search-icon" />
                </div>
            </div>
            {/* WEATHER ICON */}
            <div className="weather-image">
                <img src={weaIcon} alt="weather-icon" />
            </div>
            {/* WEATHER ICON */}

            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            
            <div className="data-container">
                {/* ELEMENT  */}
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                {/* ELEMENT  */}

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">64MPH</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                {/* ELEMENT  */}

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">64MPH</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherApp;
