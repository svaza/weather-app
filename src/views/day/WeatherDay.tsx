import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppDataStore } from "../../AppDataStore";
import { AppDataStoreContext } from "../../Context";
import { ForecastHelper } from "../ForecastHelper";
import CurrentWeather from "../home/CurrentWeather";
import { ForecastItem } from "../api-model";
import './WeatherDay.scss';

export function WeatherDay() {

    const { dt } = useParams();
    const appDataStore: AppDataStore = useContext(AppDataStoreContext);
    const filteredForecastItems = ForecastHelper.filterForecastItems(Number(dt), appDataStore.currentForecastWeather.list);
    const currentItem = filteredForecastItems.find(e => e.dt === Number(dt));
    const currentWeatherModel = ForecastHelper.forecastItemToCurrentWeatherModel(currentItem as ForecastItem, appDataStore.currentWeather);

    return (
        <div className="weatherday-container">
            <CurrentWeather current={currentWeatherModel}></CurrentWeather>
        </div>
    );
}