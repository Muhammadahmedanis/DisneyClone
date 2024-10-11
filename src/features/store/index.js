import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../movie/movieSlice'
import userSlice from '../user/userSlice'

const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userSlice,
    }
})

export default store;