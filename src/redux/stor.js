import DiestSlice from "./features/diets/DiestSlice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        diest: DiestSlice,
    },
    middleware: getDefaultMiddleware(),

});
export default store;
