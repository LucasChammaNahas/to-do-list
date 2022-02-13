import { Container } from '@mui/material';
import { useEffect } from 'react';
import Card from '../Card'
import { useGlobalState } from '../Provider';

export default function TodoList() {
  const { todoList } = useGlobalState();
  const { setIsSaving } = useGlobalState();
  const { timeoutId, setTimeoutId } = useGlobalState();
  const { timeoutBool, setTimeoutBool } = useGlobalState();

  useEffect(() => {
    if (timeoutBool) {
      const id = setTimeout(() => {
        console.log('📺🐛 ababou', id);
        setIsSaving(false);
      }, 1000);
      setTimeoutId(id);
      setTimeoutBool(false);
    }
  }, [setIsSaving, setTimeoutId, setTimeoutBool, timeoutBool]);

  function myStopFunction() {
    clearTimeout(timeoutId);
    console.log('📺🐛 id stop', timeoutId);
  }

  const renderCards = () => todoList.map((_, index) => <Card index={index} />);

  return (
    <Container maxWidth="sm" my={2}>
      <div onClick={() => myStopFunction()}>stop</div>
      <div onClick={() => setIsSaving(true)}>set is saving true</div>
      {renderCards()}
    </Container>
  );
}