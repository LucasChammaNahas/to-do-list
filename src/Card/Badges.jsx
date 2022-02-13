import { IconButton, Grid } from '@mui/material';
import { GppGood, GppBad, GppMaybe } from '@mui/icons-material';
import { palette } from '../Utils/palette';
import { useGlobalState } from '../Provider';

export default function Badges({ index }) {
  const { todoList, setTodoList } = useGlobalState();
  const color = todoList[index].status;

  let bad = 'gray';
  let maybe = 'gray';
  let good = 'gray';
  
  if (color === 'red') bad = palette[color];
  if (color === 'yellow') maybe = palette[color];
  if (color === 'green') good = palette[color];

  const changeStatus = (status) => {
    let updatedStatus = [...todoList];
    updatedStatus[index].status = status;
    setTodoList(updatedStatus);
  };
  
  return (
    <Grid>
      <IconButton onClick={() => changeStatus('red') }>
        <GppBad style={{fill: bad}}  />
      </IconButton>
      <IconButton onClick={() => changeStatus('yellow') }>
        <GppMaybe style={{fill: maybe}}  />
      </IconButton>
      <IconButton onClick={() => changeStatus('green') }>
        <GppGood style={{fill: good}} />
      </IconButton>
    </Grid>
  );
}