import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    loading: false,
    diet: [],
    isError: false,
    error: "",
};

export const getDiet = createAsyncThunk("diet/getDiet", async () => {
    const res = await axios.get("https://sandbox.psapi.co/random-pro");
    return res.data;
})

const dietSlice = createSlice({
    name: "diet",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDiet.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getDiet.fulfilled, (state, action) => {
                state.diet = action.payload;
                state.loading = false;
            })
            .addCase(getDiet.rejected, (state, action) => {
                state.error = action.payload.massage;
                state.isError = true;
            })
    }
});
export const { setDiet } = dietSlice.actions;
export default dietSlice.reducer;
