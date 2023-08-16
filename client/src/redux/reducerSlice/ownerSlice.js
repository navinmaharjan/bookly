import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ownerDetails: {},
    isOwnerLoggedIn: false,
    token: ''
};

const OwnerSlice = createSlice({
    name: "owner",
    initialState,
    reducers: {
        setOwnerDetails: (state, actions) => {
            return {
                ...state,
                token: actions.payload.token,
                isOwnerLoggedIn: actions.payload.success,
                ownerDetails: actions.payload.ownerDetails
            }
        },
        handleOwnerLogOut: (state, actions) => {
            return initialState

        }
    }

}
);

export const { setOwnerDetails, handleOwnerLogOut } = OwnerSlice.actions;
export default OwnerSlice.reducer;