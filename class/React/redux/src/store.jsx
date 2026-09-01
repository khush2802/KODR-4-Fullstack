import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/ReducerFun';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;