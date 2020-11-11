// This is called React Context API

// setup data layer
// tracking user data and basket history
import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const DataLayerContext = createContext();

// build a provider
export const DataLayer = ({ reducer, initialState, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// This is how we use in inside of a components
export const useDataLayerValue = () => useContext(DataLayerContext);

// This is always fixed
