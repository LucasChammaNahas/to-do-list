import List from '@mui/icons-material/FormatListNumbered';
import { Button } from '@mui/material';
import { useGlobalState } from '../Provider';

export default function AddTodoBtn() {
  const { todoList, setTodoList } = useGlobalState();

  const addTodo = () => {
    const timestamp = new Date().getTime();
    const todo = { status: 'A', timestamp, msg: '' };
    const updatedList = [...todoList];
    updatedList.unshift(todo);
    setTodoList(updatedList);
  };

  return (
    <Button
      size="large"
      variant="contained"
      endIcon={<List />}
      onClick={addTodo}
      fullWidth
    >
      Add Todo
    </Button>
  );
}