import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useGlobalState } from '../Provider';

export default function MyTextInput({ index }) {
  const { timeoutId } = useGlobalState();
  const { setTimeoutBool } = useGlobalState();
  const { setIsSaving } = useGlobalState();
  const { todoList, setTodoList } = useGlobalState();

  const { msg } = todoList[index];

  const handleChange = (value) => {
    clearTimeout(timeoutId);
    setTimeoutBool(true);
    setIsSaving(true);
    const updatedList = [...todoList];
    updatedList[index].msg = value;
    setTodoList(updatedList)
    console.log('📺🐛 value', value);
  };

  return (
      <Grid item xs={ 12 }>
        <TextField
          value={ msg }
          placeholder="Enter Todo..."
          multiline
          minRows={2}
          fullWidth
          onChange={ (e) => handleChange(e.target.value) }
        />
      </Grid>
  );
}
