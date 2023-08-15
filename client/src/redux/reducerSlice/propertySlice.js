import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    propertyDetails: {},
};

const PropertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        setPropertyDetails: (state, actions) => {

        },
        
    }
});

export const { setUserDetails } = PropertySlice.actions;
export default PropertySlice.reducer;