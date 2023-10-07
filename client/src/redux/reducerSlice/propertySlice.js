import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    propertyDetails: {},
};

const PropertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        setPropertyDetails: (state, actions) => {
            return {
                ...state,
                propertyDetails: actions.payload.propertyDetails
            }
        },
        
    }
});

export const { setPropertyDetails } = PropertySlice.actions;
export default PropertySlice.reducer;