import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "../reducerSlice/userSlice"
import propertySlice from "../reducerSlice/propertySlice"
import logger from 'redux-logger'

const reducer = combineReducers({
 user: userSlice,
 property: propertySlice
//other slices will be here
});
 
const store = configureStore({
 reducer,
 middleware: [logger]
});
 
export default store;


 