import DiestSlice from "./diets/DiestSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        diest: DiestSlice,
    },
    
});
