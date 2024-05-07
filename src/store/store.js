import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/MoviesSlice";
import currencyReducer from "./slices/CurrencySlice";
const store = configureStore({
    reducer: {
        movies: moviesReducer,
        currency:currencyReducer
        
    }
})
export default store