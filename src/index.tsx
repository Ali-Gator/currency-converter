import { createRoot } from 'react-dom/client';
import { Main } from './pages/main';
import './styles/base.scss';

const rootNode = document.getElementById('app');

if (rootNode) {
  createRoot(rootNode).render(<Main />);
}
