import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function MyTextInput() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <Grid item xs={ 10 }>
        <TextField
          placeholder="Enter Todo..."
          multiline
          minRows={6}
          fullWidth
        />
      </Grid>
  );
}
