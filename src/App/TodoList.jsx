import { Container } from '@mui/material';
import Card from '../Card'
import { useGlobalState } from '../Provider';

export default function TodoList() {
  const { todoList, setTodoList } = useGlobalState();
  console.log('📺🐛 ', todoList);

  const renderCards = () => todoList.map((_, index) => <Card index={ index } />);
  
  return (
    <Container maxWidth="sm" my={ 2 }>
      { renderCards() }
    </Container>
  );
}