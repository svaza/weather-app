import { ApiDataService } from "./ApiDataService";
import React from "react";
import { AppDataStore } from "./AppDataStore";

export const appDataStore = new AppDataStore();
export const apiDataService = new ApiDataService(appDataStore);
export const ApiDataContext = React.createContext(apiDataService);
export const AppDataStoreContext = React.createContext(appDataStore);