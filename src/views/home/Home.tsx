import React from 'react';
import './Home.scss';
import CurrentWeather from './CurrentWeather';
import { CurrentWeatherModel, ForecastModel } from '../api-model';
import { WeatherItem } from './WeatherItem';
import { ForecastHelper } from './ForecastHelper';

interface HomeProp {
    currentWeather: CurrentWeatherModel;
    forecast: ForecastModel;
}


export default function Home(props: HomeProp) {

    if (!props.currentWeather) {
        return null;
    }

    const futureItems: React.ReactNode[] = [];
    if (props.forecast) {
        ForecastHelper.getDistinctForecastItems(props.currentWeather, props.forecast)
            .forEach((item) => {
                futureItems.push((<WeatherItem item={item} key={item.dt}></WeatherItem>));
            });
    }


    return (
        <div className="home-container">
            <CurrentWeather current={props.currentWeather}></CurrentWeather>
            <div className="future-status">
                {
                    futureItems
                }
            </div>
        </div>
    );
}
