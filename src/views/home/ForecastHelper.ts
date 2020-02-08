import { ForecastItem, ForecastModel, CurrentWeatherModel } from "../api-model";
import { appSettings } from "../../app-settings";

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

    private static isSameDay(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate()
            && date1.getMonth() === date2.getMonth()
            && date1.getFullYear() === date2.getUTCFullYear();
    }

}