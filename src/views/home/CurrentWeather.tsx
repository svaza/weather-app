import React from 'react';
import { CurrentWeatherModel } from '../api-model';
import './CurrentWeather.scss';

interface CurrentWeatherProp {
    current: CurrentWeatherModel;
}


export default class CurrentWeather extends React.Component<CurrentWeatherProp> {

    render() {
        return (
            <div className="current-weather-cont">
                <img className="weather-ico" src={`https://openweathermap.org/img/wn/50n@2x.png`} alt="weather info"></img>
                <div className="temp-info">
                    <p className="temp bold">
                        25&deg;C
                        <span className="feels_like">feels like 24.7&deg;C</span>
                    </p>
                    <p className="sep">|</p>
                    <p className="oth-det">
                        <span className="bold">Smoke</span>
                    </p>
                    <p className="sep">|</p>
                    <p className="oth-det"> 25/25&deg;C</p>
                </div>

                <p className="misc-info misc-info--sep">Pressure 1014 hPa <span className="gap"></span> Humidity 53%</p>
                <p className="misc-info">Wind speed 2.6 mtr/sec <span className="gap"></span> Wind direction 360&deg;(meteorological)</p>
                <p className="misc-info">Sunrise 7:30AM <span className="gap"></span> Sunset 8:00PM</p>
                <p className="loc misc-info">
                    <i className="material-icons">place</i>
                    <a href="#"><p>(19.0144, 72.8479)</p></a>
                </p>
            </div>
        );
    }

}