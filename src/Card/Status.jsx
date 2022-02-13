import { Typography, Grid } from '@mui/material';

export default function Card() {
  const styles = {
    sx: {
      width: '80%',
      height: '8px',
      borderRadius: '4px 1px 1px 1px',
      marginTop: '-16px',
      marginLeft: '-24px',
    },
  };
  return (
    <Grid>
      <Typography>
        Status:
      </Typography>
    </Grid>
  );
}