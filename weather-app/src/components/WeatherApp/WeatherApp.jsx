import React from "react";
import './WeatherApp.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';
import snow_icon from '../assets/snow.png';
import drizzle_icon from '../assets/drizzle.png';
import cloud_icon from '../assets/cloud.png';


const WeatherApp = () => {

let api = 'b6a61e5b7a18005040feaa658d3a6eed'

const search = () => {
    
}

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon">
                    <img src={search_icon} alt="search-icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="cloud-icon" />
            </div>
            <div className="weather-temp">24%C</div>
            <div className="weather-location">London</div>
            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">64MPH</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

                {/* <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div> */}


            </div>
        </div>
    )
}


export default WeatherApp
