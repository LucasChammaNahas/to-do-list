import { Box, Paper, Grid, Button } from '@mui/material';
import Status from './Status';
import Badges from './Badges';
import MyTextInput from './MyTextInput';
import TopBar from './TopBar';
import CloseButton from './CloseButton';


export default function Card() {
  return (
    <Paper elevation={ 5 }>
      <Box pb={ 2 } pt={ 0 }px={ 3 }>
        <Grid container>
          <Grid container justifyContent="space-between">
            <TopBar />
            <CloseButton />
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between" my={ 2 }>
            <Status />
          </Grid>
          <Grid container>
            <Badges />
            <MyTextInput />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
