import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './sass/main.scss';
import { ApiDataContext, AppDataStoreContext, apiDataService, appDataStore } from './Context';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    (
        <ApiDataContext.Provider value={apiDataService}>
            <AppDataStoreContext.Provider value={appDataStore}>
                <HashRouter>
                    <App />
                </HashRouter>
            </AppDataStoreContext.Provider>
        </ApiDataContext.Provider>
    ),
    document.getElementById('app-root'));