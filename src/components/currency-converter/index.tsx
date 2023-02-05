import { FC } from 'react';
import { Input } from '../shared/input';

export const CurrencyConverter: FC = () => {
  return (
    <div className="">
      <Input type="number" min={'0'} value={'0'}/>
      <select name="" id="" />
      <span>=</span>
      <span></span>
      <select name=""
              id="" />
    </div>
  );
};
