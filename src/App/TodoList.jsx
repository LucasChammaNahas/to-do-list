import { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import Card from '../Card'
import AddTodoBtn from './AddTodoBtn';
import { useGlobalState } from '../Provider';
import api from '../Services/api';

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const { todoList, setTodoList } = useGlobalState();
  const { setIsSaving } = useGlobalState();
  const { setTimeoutId } = useGlobalState();
  const { timeoutBool, setTimeoutBool } = useGlobalState();
  const { filter } = useGlobalState();
  
  // Loads sellers list
  useEffect(() => {
    const loadTodoList = async () => {
      const res = await api.get('get');
      const list = res.data;
      const updatedList = list.map(({msg, status, timestamp}) => ({msg, status, timestamp}));;
      setTodoList(updatedList);
      setIsLoading(false);
    };
    loadTodoList();
  }, []); // eslint-disable-line
  
  useEffect(() => {
    if (timeoutBool) {
      const id = setTimeout(async () => {
        await api.post('post', todoList);
        setIsSaving(false);
      }, 10000);
      setTimeoutId(id);
      setTimeoutBool(false);
    }
  }, [setIsSaving, setTimeoutId, setTimeoutBool, timeoutBool, todoList]);
  
  if (isLoading) return <h1>Loading...</h1>

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
