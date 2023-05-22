const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    loading: false,
    diet: [],
    error: "",
};
const dietSlice = createSlice({
    name: "diet",
    initialState,
    reducers: {
        setDiet(state, action) {
            state.diet = action.payload;
        },
    },
});
export const { setDiet } = dietSlice.actions;
export default dietSlice.reducer;
