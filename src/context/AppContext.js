import { createContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = AppContext.Provider;

export const AppContextConsumer = AppContext.Consumer;
