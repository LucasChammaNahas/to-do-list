import { useEffect } from 'react';
import { Container, Box, Grid } from '@mui/material';
import Card from '../Card'
import AddTodoBtn from './AddTodoBtn';
import { useGlobalState } from '../Provider';

export default function TodoList() {
  const { todoList } = useGlobalState();
  const { setIsSaving } = useGlobalState();
  const { setTimeoutId } = useGlobalState();
  const { timeoutBool, setTimeoutBool } = useGlobalState();
  const { filter, setFilter } = useGlobalState();

  console.log('📺🐛 todolist', todoList);

  useEffect(() => {
    if (timeoutBool) {
      const id = setTimeout(() => {
        setIsSaving(false);
      }, 3000);
      setTimeoutId(id);
      setTimeoutBool(false);
    }
  }, [setIsSaving, setTimeoutId, setTimeoutBool, timeoutBool]);

  const sortCards = () => {
    let sorted;
    if (filter.status) {
      sorted = todoList.sort(function (a, b) {
        let x = a.status.toLowerCase();
        let y = b.status.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    }
    else if (filter.timestamp) sorted = todoList.sort(function(a, b){return a.timestamp - b.timestamp});
    else {
      sorted = todoList.sort(function (a, b) {
        let x = a.msg.toLowerCase();
        let y = b.msg.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    }
    return sorted;
  };

  const sortedCards = sortCards();

  const renderCards = () => sortedCards.map((_, index) => <Card index={index} />);

  return (
    <Container maxWidth="sm">
      <Box my={2}>
        <Grid container justifyContent="center">
          <AddTodoBtn />
        </Grid>
        {renderCards()}
      </Box>
    </Container>
  );
}
