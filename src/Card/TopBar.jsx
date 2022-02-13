import { Box, Grid } from '@mui/material';
import { useGlobalState } from '../Provider';
import { palette } from '../Utils/palette';

export default function TopBar({ index }) {
  const { todoList } = useGlobalState();
  const color = todoList[index].status;

  const styles = {
    sx: {
      backgroundColor: palette[color],
      height: '4px',
      borderRadius: '4px 1px 1px 1px',
      marginLeft: '-24px',
    },
  };

  return (
    <Grid item xs={ 4 }>
      <Box {...styles}/>
    </Grid>
  );
}