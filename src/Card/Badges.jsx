import { IconButton, Grid } from '@mui/material';
import { GppGood, GppBad, GppMaybe } from '@mui/icons-material';
import { palette } from '../Utils/palette';
import { useGlobalState } from '../Provider';

export default function Badges({ index }) {
  const { todoList, setTodoList } = useGlobalState();
  const color = todoList[index].status;

  let bad = palette['gray'];
  let maybe = palette['gray'];
  let good = palette['gray'];
  
  if (color === 'A') bad = palette[color];
  if (color === 'B') maybe = palette[color];
  if (color === 'C') good = palette[color];

  const changeStatus = (status) => {
    let updatedStatus = [...todoList];
    updatedStatus[index].status = status;
    setTodoList(updatedStatus);
  };
  
  return (
    <Grid>
      <IconButton onClick={() => changeStatus('A') }>
        <GppBad style={{fill: bad}}  />
      </IconButton>
      <IconButton onClick={() => changeStatus('B') }>
        <GppMaybe style={{fill: maybe}}  />
      </IconButton>
      <IconButton onClick={() => changeStatus('C') }>
        <GppGood style={{fill: good}} />
      </IconButton>
    </Grid>
  );
}