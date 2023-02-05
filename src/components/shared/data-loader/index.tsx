import { FC } from 'react';
import css from './index.module.scss';
import { DataLoaderProps } from './props';

export const DataLoaderWrapper: FC<DataLoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className={css.loaderWrapper}>
        <div className={css.loader}>
          <svg
            className={css.loader__svg}
            viewBox="25 25 50 50"
            style={{ animationDuration: '2s' }}
          >
            <circle
              className={css.loader__circle}
              cx="50"
              cy="50"
              r="20"
              fill='none'
              strokeWidth='2'
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
