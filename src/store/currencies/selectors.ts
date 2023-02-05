import { RootState } from '../../interfaces/store/root-state';

export const selectSymbols = (state: RootState) => state.currencies.symbols;
export const selectStatus = (state: RootState) => state.currencies.status;
export const selectCurrencyQuery = (state: RootState) => state.currencies.currencyQuery;
export const selectConvertionResult = (state: RootState) => state.currencies.convertionResult;
export const selectHistoryQuery = (state: RootState) => state.currencies.historyQuery;
export const selectHistoryResult = (state: RootState) => state.currencies.historyResult;

