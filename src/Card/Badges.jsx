import { IconButton, Grid } from '@mui/material';
import { GppGood, GppBad, GppMaybe } from '@mui/icons-material';
import { palette } from '../Utils/palette';

export default function Badges() {
  const { red, yellow, green } = palette
  return (
    <Grid container item xs={2} direction="column" justifyContent="center" alignItems="flex-start">
      <IconButton>
        <GppBad fontSize="large" style={{fill: red}}  />
      </IconButton>
      <IconButton>
        <GppMaybe fontSize="large" style={{fill: yellow}}  />
      </IconButton>
      <IconButton>
        <GppGood fontSize="large" style={{fill: green}} />
      </IconButton>
    </Grid>
  );
}