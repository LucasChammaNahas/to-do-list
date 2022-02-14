import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey } from '@mui/material/colors';
import { useGlobalState } from '../Provider';

export default function Filters() {
  const initialState = {
    timestamp: false,
    status: false,
    alphabet: false,
  }
  const { filter, setFilter } = useGlobalState();

  const handleChange = (event) => {
    setFilter({
      ...initialState,
      [event.target.name]: event.target.checked,
    });
  };

  const color = {
    color: grey[100],
    '&.Mui-checked': {
      color: grey[100],
    },
  }

  
  const { timestamp, status, alphabet } = filter;

  return (
    <Grid container direction="row">
      <Box mr={2}>
        <FormControlLabel
          label="Date"
          control={<Checkbox checked={timestamp} onChange={handleChange} name="timestamp" sx={color} />}
        />
      </Box>
      <Box mr={2}>
        <FormControlLabel
          label="Status"
          control={<Checkbox checked={status} onChange={handleChange} name="status" sx={color} />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Alphabetically"
          control={<Checkbox checked={alphabet} onChange={handleChange} name="alphabet" sx={color} />}
        />
      </Box>
    </Grid>
  );
}
