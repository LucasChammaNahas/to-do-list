import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useGlobalState } from '../Provider';

export default function MyTextInput() {
  const { timeoutId } = useGlobalState();
  const { setTimeoutBool } = useGlobalState();
  const { setIsSaving } = useGlobalState();

  const handleChange = (event) => {
    clearTimeout(timeoutId);
    setTimeoutBool(true);
    setIsSaving(true);
  };

  return (
      <Grid item xs={ 12 }>
        <TextField
          placeholder="Enter Todo..."
          multiline
          minRows={2}
          fullWidth
          onChange={ handleChange }
        />
      </Grid>
  );
}
