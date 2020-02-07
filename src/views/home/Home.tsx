import React from 'react';
import './Home.scss';
import CurrentWeather from './CurrentWeather';
import { CurrentWeatherModel, ForecastModel } from '../api-model';
import { WeatherItem } from './WeatherItem';

interface HomeProp {
    currentWeather: CurrentWeatherModel;
    forecast: ForecastModel;
}


export default function Home(props: HomeProp) {

    if (!props.currentWeather) {
        return null;
    }

    return (
        <div className="home-container">
            <CurrentWeather current={props.currentWeather}></CurrentWeather>
            <div className="future-status">
                {
                    props.forecast.list.map(forecastItem => {
                        return (<WeatherItem item={forecastItem}></WeatherItem>);
                    })
                }
            </div>
        </div>
    );
}
