import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/reducer';
import { currencyApi } from '../api/api';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    [currencyApi.reducerPath]: currencyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware)
});


