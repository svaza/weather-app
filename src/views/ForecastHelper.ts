import { ForecastItem, ForecastModel, CurrentWeatherModel } from "./api-model";
import { appSettings } from "../app-settings";

export class ForecastHelper {

    static getDistinctForecastItems(currentWeather: CurrentWeatherModel, forecast: ForecastModel): Map<number, ForecastItem> {
        const forecastMap: Map<number, ForecastItem>= new Map();
        
        const currentWeatherDate = new Date(1);
        currentWeatherDate.setUTCSeconds(currentWeather.dt);

        forecast.list.forEach((item, index) => {
            const itemDate = new Date(1);
            itemDate.setUTCSeconds(item.dt);

            if(ForecastHelper.isSameDay(currentWeatherDate, itemDate)) return;
            if(forecastMap.has(itemDate.getDate())) return;

            if(itemDate.getHours() === appSettings.forecastPivotHour) {
                forecastMap.set(itemDate.getDate(), item);
            }

        });

        return forecastMap;
    }

    static filterForecastItems(dt: number, forecastItems: ForecastItem[]): ForecastItem[] {
        const filteredItems: ForecastItem[] = [];

        const pivotDate = new Date(1);
        pivotDate.setUTCSeconds(dt);

        forecastItems.forEach(item => {
            const itemDate = new Date(1);
            itemDate.setUTCSeconds(item.dt);
            
            if(ForecastHelper.isSameDay(pivotDate, itemDate)) {
                filteredItems.push(item);
            }
        });

        return filteredItems;
    }

    static forecastItemToCurrentWeatherModel(item: ForecastItem, currentWeather: CurrentWeatherModel): CurrentWeatherModel {
        const targetWeather: CurrentWeatherModel = {} as any;

        targetWeather.clouds = item.clouds;
        targetWeather.coord = currentWeather.coord;
        targetWeather.dt = item.dt;
        targetWeather.main = item.main;
        targetWeather.name = currentWeather.name;
        targetWeather.sys = { country: currentWeather.sys.country } as any;
        targetWeather.weather = item.weather;
        targetWeather.wind = item.wind;

        // make a copy - just a precaution
        return JSON.parse(JSON.stringify(targetWeather));
    } 

    static isSameDay(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate()
            && date1.getMonth() === date2.getMonth()
            && date1.getFullYear() === date2.getUTCFullYear();
    }

}