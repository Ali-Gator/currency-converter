import { createRoot } from 'react-dom/client';
import { Main } from './pages/main/main';
import './index.scss';

const rootNode = document.getElementById('app');

if (rootNode) {
  createRoot(rootNode).render(<Main />);
}
