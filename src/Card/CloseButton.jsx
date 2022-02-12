import { Grid, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { palette } from '../Utils/palette';

export default function CloseButton() {
  const styles = {
    sx: {
      marginRight: '-24px',
    },
  };

  return (
    <Grid item>
      <IconButton {...styles}>
        <DeleteForeverIcon fontSize="large" style={{ fill: 'gray' }} />
      </IconButton>
    </Grid>
  );
}