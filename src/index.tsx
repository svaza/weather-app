import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './sass/main.scss';
import { ApiDataContext, AppDataStoreContext, apiDataService, appDataStore } from './Context';

ReactDOM.render(
    (
        <ApiDataContext.Provider value={apiDataService}>
            <AppDataStoreContext.Provider value={appDataStore}>
                <App />
            </AppDataStoreContext.Provider>
        </ApiDataContext.Provider>
    ),
    document.getElementById('app-root'));