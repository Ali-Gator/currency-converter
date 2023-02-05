import { StateStatus } from './root-state';
import { ConvertionQuery } from '../api/convertion-query';
import { HistoryQuery } from '../api/history-query';

export interface CurrenciesState {
  status: StateStatus;
  symbols: string[];
  currencyQuery: ConvertionQuery;
  convertionResult: string;
  historyQuery: HistoryQuery;
  historyResult: [string, number][];
}
