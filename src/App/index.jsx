import Header from './Header'
import TodoList from './TodoList'
import { Provider } from '../Provider';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <Provider>
      <CssBaseline />
      <Header />
      <TodoList />
    </Provider>
  );
}
