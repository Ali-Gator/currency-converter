import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateEnum, StateStatus } from '../../interfaces/store/root-state';
import { initialState } from './initial-state';
import { currencyApi } from '../../api/api';
import { ActionStatus, PendingAction, RejectedAction } from '../../interfaces/store/actions';
import { ConvertionQuery } from '../../interfaces/api/convertion-query';
import { HistoryQuery } from '../../interfaces/api/history-query';

export const slice = createSlice({
  name: RootStateEnum.currencies,
  initialState,
  reducers: {
    setCurrencyQuery: (state, action: PayloadAction<Partial<ConvertionQuery>>) => {
      state.currencyQuery = { ...state.currencyQuery, ...action.payload };
    },
    setHistoryQuery: (state, action: PayloadAction<Partial<HistoryQuery>>) => {
      state.historyQuery = { ...state.historyQuery, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(currencyApi.endpoints.getSymbols.matchFulfilled,
        (state, { payload }) => {
          state.status = StateStatus.idle;
          state.symbols = Object.keys(payload.symbols);
        })
      .addMatcher(currencyApi.endpoints.getConvertion.matchFulfilled,
        (state, { payload }) => {
          state.status = StateStatus.idle;
          state.convertionResult = payload.result.toString();
        })
      .addMatcher(currencyApi.endpoints.getHistoryRates.matchFulfilled,
        (state, { payload }) => {
          state.status = StateStatus.idle;
          state.historyResult = Object.entries(payload.rates);
        })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith(ActionStatus.pending),
        state => {
          state.status = StateStatus.loading;
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith(ActionStatus.rejected),
        state => {
          state.status = StateStatus.idle;
        }
      );
  }
});
