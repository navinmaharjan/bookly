import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from "../reducerSlice/userSlice"
import ownerSlice from "../reducerSlice/ownerSlice"
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    user: userSlice,
    owner: ownerSlice,
   
    //other slices will be here
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger]
});

export const persistor = persistStore(store)


