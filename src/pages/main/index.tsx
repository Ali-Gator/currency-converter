import { FC } from 'react';
import css from './index.module.scss';
import { CurrencyConverter } from '../../components/currency-converter';

export const Main: FC = () => {
  const baseUrl = `${process.env.API_KEY}`;
  console.log(baseUrl);

  return (
    <main className={css.main}>
      <h1 className={css.mainTitle}>Currency converter</h1>
      <CurrencyConverter />
    </main>
  );
};
