import { FC, useEffect } from 'react';
import css from './index.module.scss';
import { CurrencyConverter } from '../../components/currency-converter';
import { useLazyGetSymbolsQuery } from '../../api/api';
import { CurrencyList } from '../../components/currency-list';

export const Main: FC = () => {
  const [getSymbols] = useLazyGetSymbolsQuery();

  useEffect(() => {
    getSymbols();
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.mainTitle}>Currency converter</h1>
      <CurrencyConverter />
      <CurrencyList />
    </main>
  );
};
