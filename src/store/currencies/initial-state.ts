import { CurrenciesState } from '../../interfaces/store/currencies-state';
import { StateStatus } from '../../interfaces/store/root-state';

export const initialState: CurrenciesState = {
  status: StateStatus.idle,
  symbols: [],
  currencyQuery: {
    from: '',
    to: '',
    amount: '0'
  },
  convertionResult: '',
  historyQuery: {
    date: new Date().toISOString().substring(0, 10),
    base: ''
  },
  historyResult: []
};
