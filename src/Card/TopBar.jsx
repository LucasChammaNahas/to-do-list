import { Box, Paper, Grid, Button } from '@mui/material';
import { palette } from '../Utils/palette';

export default function TopBar() {
  const styles = {
    sx: {
      backgroundColor: palette.red,
      height: '8px',
      borderRadius: '4px 1px 1px 1px',
      marginLeft: '-24px',
    },
  };

  return (
    <Grid item xs={ 8 }>
      <Box {...styles}/>
    </Grid>
  );
}