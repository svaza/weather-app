import { CurrentWeatherModel, ForecastModel } from "./views/api-model";
import { appSettings } from './app-settings';
import { WeatherLocation } from './app.model';
import { AppDataStore } from "./AppDataStore";

export class ApiDataService {
    
    constructor(private appDataStore: AppDataStore) {}

    async getCurrentForecastWeatherData(location: WeatherLocation) {
        if(this.appDataStore.currentForecastWeather) return this.appDataStore.currentForecastWeather;

        let url = '';
        if(location.lat && location.lon) {
            url = appSettings.api.currentWeatherForecastDataByCoordUrl.replace('{lat}', location.lat.toString()).replace('{lon}', location.lon.toString());
        }
        else {
            throw new Error('Location not defined');
        }
        url = url.replace('{appid}', appSettings.appid);
        let response = await fetch(url);
        if(response.ok) {
            const model = (await response.json()) as ForecastModel;
            this.appDataStore.currentForecastWeather = model;
            this.appDataStore.currentForecastWeather$.next(model);
            return model;
        } else {
            throw new Error('error while invoking current weather data');
        }
    }

    async getCurrentWeatherData(location: WeatherLocation) {
        if(this.appDataStore.currentWeather) return this.appDataStore.currentWeather;

        let url = '';
        if(location.city) {
            url = appSettings.api.currentWeatherDataByCityUrl.replace('{location}', location.city)
        }
        else if(location.lat && location.lon) {
            url = appSettings.api.currentWeatherDataByCoordUrl.replace('{lat}', location.lat.toString()).replace('{lon}', location.lon.toString());
        }
        else {
            throw new Error('Location not defined');
        }
        url = url.replace('{appid}', appSettings.appid);
        let response = await fetch(url);
        if(response.ok) {
            const model = (await response.json()) as CurrentWeatherModel;
            this.appDataStore.currentWeather = model;
            this.appDataStore.currentWeather$.next(model);
            return model;
        } else {
            throw new Error('error while invoking current weather data');
        }
    }

}