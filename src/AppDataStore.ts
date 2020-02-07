import * as Rx from 'rxjs';
import { CurrentWeatherModel, ForecastModel } from './views/api-model';
import { WeatherLocation } from './app.model';

// @todo manage the central storage more efficently
// consider redux ?
export class AppDataStore {

    currentWeather: CurrentWeatherModel = null as any;
    currentForecastWeather: ForecastModel = null as any;
    currentLocation: WeatherLocation = {};
    currentWeather$: Rx.Subject<CurrentWeatherModel> = new Rx.Subject();
    currentForecastWeather$: Rx.Subject<ForecastModel> = new Rx.Subject();

    destroy() {
        this.currentWeather$.unsubscribe();
    }
}