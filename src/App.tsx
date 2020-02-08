import React, { useState, useContext, useEffect } from 'react';
import './App.scss';
import Home from './views/home/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import { ApiDataContext, AppDataStoreContext } from './Context';
import { WeatherLocation } from './app.model';
import { CurrentWeatherModel, ForecastModel } from './views/api-model';
import { AppDataStore } from './AppDataStore';
import { ApiDataService } from './ApiDataService';
import { AppAlertDialog } from './views/AppAlertDialog';

interface AppViewModel {
    currentLocation: WeatherLocation;
    currentWeather: CurrentWeatherModel;
    currentForecast: ForecastModel;
}
export default function App() {

    const [appViewModel, setViewModel] = useState();
    let [openGeoLocationRejectionAlert, setOpenGeoLocationRejectionAlert] = useState(false);
    let [openGeoLocationNotSupportedAlert, setOpenGeoLocationNotSupportedAlert] = useState(false);
    const apiDataService: ApiDataService = useContext(ApiDataContext);
    const currentWeather: CurrentWeatherModel = appViewModel ? appViewModel.currentWeather : null;
    const currentForecastWeather: ForecastModel = appViewModel ? appViewModel.currentForecast : null;

    useEffect(() => {
        // make sure that you try to access geolocation and weather API only once when app loads
        if (navigator.geolocation && !appViewModel && !openGeoLocationRejectionAlert && !openGeoLocationNotSupportedAlert) {
            navigator.geolocation.getCurrentPosition(position => {
                const newAppViewModel: AppViewModel = {} as any;
                newAppViewModel.currentLocation = { lat: position.coords.latitude, lon: position.coords.longitude, city: '' };
                apiDataService.getCurrentWeatherData(newAppViewModel.currentLocation).then(model => {
                    newAppViewModel.currentWeather = model;
                    apiDataService.getCurrentForecastWeatherData(newAppViewModel.currentLocation).then(forecast => {
                        newAppViewModel.currentForecast = forecast;
                        setViewModel(newAppViewModel);
                    });
                });
            }, () => {
                setOpenGeoLocationRejectionAlert(true);
            });
        } else if (!navigator.geolocation) {
            setOpenGeoLocationNotSupportedAlert(true);
        }
    }, [appViewModel, openGeoLocationRejectionAlert, openGeoLocationNotSupportedAlert, apiDataService]);



    const appHeader: JSX.Element = (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <i className="material-icons">menu</i>
                </IconButton>
                <AppTitle></AppTitle>
                <div>
                    <RadioGroup aria-label="position" name="position" row value="m">
                        <FormControlLabel
                            value="m"
                            control={<Radio />}
                            label="Metric"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </div>
            </Toolbar>
        </AppBar>
    );

    return (
        <div className="root-container">
            {appHeader}
            <div>
                <Home currentWeather={currentWeather} forecast={currentForecastWeather}></Home>
            </div>
            <AppAlertDialog open={openGeoLocationRejectionAlert}
                title="Allow location access">
                <span>App needs access to your current location to get your geo coordinates, However it seems like you have dsabled or denied it</span>
            </AppAlertDialog>
            <AppAlertDialog open={openGeoLocationNotSupportedAlert}
                title="Geolocation not supported">
                <span>It seems like you are using a crapy old device or you might have disabled geolocation</span>
            </AppAlertDialog>
        </div>
    );

}

function AppTitle() {
    const [currentWeather, setCurrentWeather] = useState();
    const appDataStore: AppDataStore = useContext(AppDataStoreContext);
    let dataAsOn = new Date(1);
    if (currentWeather) {
        dataAsOn.setUTCSeconds((currentWeather as CurrentWeatherModel).dt);
    }
    useEffect(() => {
        const subscription = appDataStore.currentWeather$.subscribe((model) => {
            setCurrentWeather(model);
        });
        return () => {
            subscription.unsubscribe();
        };
    });

    return (
        <div className="app-title">
            <h1>{currentWeather ? (currentWeather as CurrentWeatherModel).name : ''}</h1>
            <p>{currentWeather ? `data as on ${dataAsOn.toDateString() + ' ' + dataAsOn.toLocaleTimeString()}` : ''}</p>
        </div>
    );
}

