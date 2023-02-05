import './styles/base.scss';
import { FC } from 'react';
import { Main } from './pages/main';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
