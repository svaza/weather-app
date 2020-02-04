export interface Coord {
    lon: number;
    lat: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Temperature {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Cloud {
    all: number;
}

export interface Metadata {
    country: string;
    sunrise: number;
    sunset: number;
}

export interface City extends Metadata {
    name: string;
    coord: Coord;
    population: number;
    timezone: number;
}

export interface ForecastItem {
    dt: number;
    main: Temperature;
    weather: WeatherCondition[];
    clouds: Cloud;
    wind: Wind;
}

/**
 * Model representing the current location's weather information
 */
export interface CurrentWeatherModel {
    coord: Coord;
    weather: WeatherCondition[];
    main: Temperature;
    wind: Wind;
    clouds: Cloud;
    sys: Metadata;
    dt: number;
    timezone: number;
    name: string;
    id: number;
}

/**
 * Model representing the current location's forecast(~5 days) information
 */
export interface ForecastModel {
    cnt: number;
    list: ForecastItem[];
    city: City;
} 