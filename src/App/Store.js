import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import colorReducer from "../features/them/ThemeSlice"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        color:colorReducer
    },
})  