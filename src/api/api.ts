import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SymbolsResponse } from '../interfaces/api/symbols-response';
import { ConvertionQuery } from '../interfaces/api/convertion-query';
import { ConvertionResponse } from '../interfaces/api/convertion-response';
import { HistoryQuery } from '../interfaces/api/history-query';
import { HistoryResponse } from '../interfaces/api/history-response';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/fixer',
    prepareHeaders: (headers) => {
      headers.set('apikey', `${process.env.API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSymbols: builder.query<SymbolsResponse, void>({
      query: () => 'symbols',
    }),
    getConvertion: builder.query<ConvertionResponse, ConvertionQuery>({
      query: ({ to, from, amount }) => ({
        url: `convert?to=${to}&from=${from}&amount=${amount}`
      }),
    }),
    getHistoryRates: builder.query<HistoryResponse, HistoryQuery>({
      query: ({ date, base }) => ({
        url: `${date}?base=${base}`
      }),
    }),
  })
});

export const { useLazyGetSymbolsQuery, useLazyGetConvertionQuery, useLazyGetHistoryRatesQuery } = currencyApi;
