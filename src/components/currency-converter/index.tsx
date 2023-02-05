import { FC, useCallback, useEffect } from 'react';
import { Input } from '../shared/input';
import { useAppSelector } from '../../interfaces/store/hooks';
import {
  selectConvertionResult,
  selectCurrencyQuery,
  selectStatus,
  selectSymbols
} from '../../store/currencies/selectors';
import { Select } from '../shared/select';
import { DataLoaderWrapper } from '../shared/data-loader';
import { StateStatus } from '../../interfaces/store/root-state';
import css from './index.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrencyQuery } from '../../store/currencies/actions';
import { useLazyGetConvertionQuery } from '../../api/api';

export const CurrencyConverter: FC = () => {
  const dispatch = useDispatch();
  const symbols = useAppSelector(selectSymbols);
  const status = useAppSelector(selectStatus);
  const { from, to, amount } = useAppSelector(selectCurrencyQuery);
  const result = useAppSelector(selectConvertionResult);
  const [getConvertion] = useLazyGetConvertionQuery();

  const handleSelectBase = useCallback((value: string) => {
    dispatch(setCurrencyQuery({ from: value }));
  }, []);

  const handleSelectTarget = useCallback((value: string) => {
    dispatch(setCurrencyQuery({ to: value }));
  }, []);

  const handleInputValue = useCallback((value: string) => {
    dispatch(setCurrencyQuery({ amount: value }));
  }, []);

  useEffect(() => {
    if (from && to && +amount > 0) {
      getConvertion({ from, to, amount });
    }
  }, [from, to, amount]);

  return (
    <div className={css.currencyConverter}>
      <Input type="number" min={'0'} value={amount} onChange={handleInputValue} />
      <Select optionValues={symbols} onChange={handleSelectBase} defaultValue={from} />
      <span>=</span>
      <span>{result}</span>
      <Select optionValues={symbols} onChange={handleSelectTarget} defaultValue={to} />
    </div>
  );
};
