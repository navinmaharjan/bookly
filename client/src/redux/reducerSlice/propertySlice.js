import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    propertyDetails: {},
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, actions) => {

        },
        
    }
});

export const { setUserDetails } = UserSlice.actions;
export default UserSlice.reducer;