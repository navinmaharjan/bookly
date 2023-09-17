import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    todos: []
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            //
        },
    }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;