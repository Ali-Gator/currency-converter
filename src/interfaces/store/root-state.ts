import { store } from '../../store';

export enum RootStateEnum {
  currencies = 'currencies'
}

export enum StateStatus {
  loading = 'loading',
  idle = 'idle',
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
