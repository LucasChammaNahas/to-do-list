import { Box, Paper, Grid } from '@mui/material';
import Status from './Status';
import Badges from './Badges';
import MyTextInput from './MyTextInput';
import TopBar from './TopBar';
import CloseButton from './CloseButton';


export default function Card({ index }) {
  return (
    <Box my={2}>
      <Paper elevation={5}>
        <Box pb={2} pt={0} px={3}>
          <Grid container>
            <Grid container justifyContent="space-between">
              <TopBar index={ index } />
              <CloseButton />
            </Grid>
            <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Status index={ index } />
              <Badges index={ index } />
            </Grid>
            <Grid container>
              <MyTextInput index={ index } />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
