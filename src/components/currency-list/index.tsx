import { Select } from '../shared/select';
import { useAppSelector } from '../../interfaces/store/hooks';
import { selectHistoryQuery, selectHistoryResult, selectSymbols } from '../../store/currencies/selectors';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setHistoryQuery } from '../../store/currencies/actions';
import { Input } from '../shared/input';
import css from './index.module.scss';
import { useLazyGetHistoryRatesQuery } from '../../api/api';
import classNames from 'classnames';

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const symbols = useAppSelector(selectSymbols);
  const { date, base } = useAppSelector(selectHistoryQuery);
  const historyRates = useAppSelector(selectHistoryResult);
  const [getHistoryRates] = useLazyGetHistoryRatesQuery();

  const handleSelectBase = useCallback((value: string) => {
    dispatch(setHistoryQuery({ base: value }));
  }, []);

  const handleInputDate = useCallback((value: string) => {
    dispatch(setHistoryQuery({ date: value }));
  }, []);

  useEffect(() => {
    if (date && base) {
      getHistoryRates({ date, base });
    }
  }, [date, base]);

  return (
    <section>
      <h2 className={css.currencyListTitle}>Currency rates for
        <Select optionValues={symbols} onChange={handleSelectBase} defaultValue={base} />
        <span>on</span>
        <Input type="date" value={date} onChange={handleInputDate} max={new Date().toISOString().substring(0, 10)} />
      </h2>
      {historyRates.length > 0 &&
        <table className={css.currencyListTable}>
          <thead className={css.currencyListTableHead}>
          <tr>
            <th className={css.currencyListTableHeadCode}>Currency code</th>
            <th>Rate</th>
          </tr>
          </thead>
          <tbody className={css.currencyListTableBody}>
          {historyRates.map(([code, rate], index) => (
            <tr key={code}
                className={classNames(css.currencyListTableRow, { [css.currencyListTableRowColored]: index % 2 })}
                onClick={() => handleSelectBase(code)}>
              <td className={css.currencyListTableDataCode}>{code}</td>
              <td>{rate}</td>
            </tr>
          ))}
          </tbody>
        </table>}
    </section>
  );
};
