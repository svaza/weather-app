interface Setting {
    appid: string;
    api: ApiConfiguration;
    forecastPivotHour: number;
}

interface ApiConfiguration {
    currentWeatherDataByCityUrl: string;
    currentWeatherDataByCoordUrl: string;
    currentWeatherForecastDataByCoordUrl: string;
}

export const appSettings: Setting = {
    appid: 'adb9dd6b20cadd87d12b7df253187477',
    forecastPivotHour: 8,
    api: {
        currentWeatherDataByCityUrl: 'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={appid}&units=metric',
        currentWeatherDataByCoordUrl: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={appid}&units=metric',
        currentWeatherForecastDataByCoordUrl: 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=adb9dd6b20cadd87d12b7df253187477&units=metric'
    }
};