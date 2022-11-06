import { configureStore } from '@reduxjs/toolkit';
import MyReducer from './components/Reducer';

export default configureStore({
  reducer: {
    countRed: MyReducer
  },
})