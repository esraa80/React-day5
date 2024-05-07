import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesAction = createAsyncThunk("movies/getAll", async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=04229759bd2257e769a077ccb97a575f"
  );
  return res.data.results;
});
export const MovieByIdAction = createAsyncThunk(
  "movies/getById",
  async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=04229759bd2257e769a077ccb97a575f`
    );
    return res.data;
  }
);
export const moviesPagenationAction = createAsyncThunk(
  "movies/getPage",
  async (currentPage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=04229759bd2257e769a077ccb97a575f&page=${currentPage}`
    );
    return res.data.results;
  }
);


const moviesSlice = createSlice({
  name: "movies",
    initialState: {
        movies: [],
      movieDetails:{}
   },
    extraReducers: (builder) => {
      
    builder.addCase(moviesAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
    });
    builder.addCase(moviesAction.pending, (state) => {
      state.loading = true;
    });
        builder.addCase(moviesAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
       });
      
        
     builder.addCase(MovieByIdAction.pending, (state) => {
       state.loading = true;
       state.error = null;
     });
     builder.addCase(MovieByIdAction.fulfilled, (state, action) => {
       state.movieDetails = action.payload;
       state.loading = false;
     });
     builder.addCase(MovieByIdAction.rejected, (state, action) => {
       state.loading = false;
       state.error = action.error.message;
     });
        
     builder.addCase(moviesPagenationAction.pending, (state) => {
       state.loading = true;
       state.error = null;
     });
     builder.addCase(moviesPagenationAction.fulfilled, (state, action) => {
       state.movies = action.payload;
       state.loading = false;
     });
     builder.addCase(moviesPagenationAction.rejected, (state, action) => {
       state.loading = false;
       state.error = action.error.message;
     });
  },
});

export default moviesSlice.reducer;
