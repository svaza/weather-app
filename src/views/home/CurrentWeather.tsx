import React from 'react';
import { CurrentWeatherModel } from '../api-model';
import './CurrentWeather.scss';

interface CurrentWeatherProp {
    current: CurrentWeatherModel;
}


export default class CurrentWeather extends React.Component<CurrentWeatherProp> {

    render() {
        const sunriseDate = new Date(1);
        sunriseDate.setUTCSeconds(this.props.current.sys.sunrise);
        const sunsetDate = new Date(1);
        sunsetDate.setUTCSeconds(this.props.current.sys.sunset);

        return (
            <div className="current-weather-cont">
                <img className="weather-ico" src={`https://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@2x.png`} alt="weather info"></img>
                <div className="temp-info">
                    <p className="temp bold">
                        {this.props.current.main.temp}&deg;C
                        <span className="feels_like">feels like {this.props.current.main.feels_like}&deg;C</span>
                    </p>
                    <p className="sep">|</p>
                    <p className="oth-det">
                        <span className="bold">{this.props.current.weather[0].main}</span>
                    </p>
                    <p className="sep">|</p>
                    <p className="oth-det"> {this.props.current.main.temp_min}/{this.props.current.main.temp_max}&deg;C</p>
                </div>

                <p className="misc-info misc-info--sep">Pressure {this.props.current.main.pressure} hPa <span className="gap"></span> Humidity {this.props.current.main.humidity}%</p>
                <p className="misc-info">Wind speed {this.props.current.wind.speed} mtr/sec <span className="gap"></span> Wind direction {this.props.current.wind.deg}&deg;(meteorological)</p>
                <p className="misc-info">Sunrise {sunriseDate.getHours() + ':' + sunriseDate.getMinutes()}AM <span className="gap"></span> Sunset {sunsetDate.getHours() + ':' + sunsetDate.getMinutes()}PM</p>
                <p className="loc misc-info">
                    <i className="material-icons">place</i>
                    <span>({this.props.current.coord.lat}, {this.props.current.coord.lon})</span>
                </p>
            </div>
        );
    }

}