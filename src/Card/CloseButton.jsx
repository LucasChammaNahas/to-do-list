import { Grid, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useGlobalState } from '../Provider';
// import { palette } from '../Utils/palette';

export default function CloseButton({ index }) {
  const { todoList, setTodoList } = useGlobalState();
  const styles = {
    sx: {
      marginRight: '-24px',
    },
  };

  const deleteCard = () => {
    const updatedList = [...todoList].filter((_,i) => i !== index );
    setTodoList(updatedList);
  };

  return (
    <Grid item>
      <IconButton onClick={ deleteCard } {...styles}>
        <DeleteForeverIcon fontSize="medium" color="primary" />
      </IconButton>
    </Grid>
  );
}