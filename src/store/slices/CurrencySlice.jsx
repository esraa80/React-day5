import { createSlice } from "@reduxjs/toolkit";


const currencySlice = createSlice({
    name: "Currency",
    initialState: {
        selectCurrency:"L.E"
    },
    reducers: {
        selectCurrency: (state,action) => {
            state.selectCurrency = action.payload;
        }
    }
})
export const { selectCurrency } = currencySlice.actions;

export const selectSelectedCurrency = (state) =>
  state.currency.selectedCurrency;

export default currencySlice.reducer;