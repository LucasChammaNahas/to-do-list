import { Typography, Grid } from '@mui/material';
import { useGlobalState } from '../Provider';

export default function Card({ index }) {
  const { todoList } = useGlobalState();

  let status;
  if (todoList[index].status === 'A') status = 'Pending';
  if (todoList[index].status === 'B') status = 'In Progress';
  if (todoList[index].status === 'C') status = 'Finished';
  
  return (
    <Grid>
      <Typography>
        <strong>Status:</strong> <i>{status}</i>
      </Typography>
    </Grid>
  );
}