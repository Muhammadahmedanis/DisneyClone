import moviesData from '../../movieData';
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: moviesData,
    }
})

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;