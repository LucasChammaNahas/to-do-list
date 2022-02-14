import AppBar from '@mui/material/AppBar';
import { Box, Typography, IconButton, Grid, Toolbar } from '@mui/material';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SyncIcon from '@mui/icons-material/Sync';
import { createStyles, makeStyles } from "@mui/styles";
import { useGlobalState } from '../Provider';
import Filters from './Filters';

export const useStyles = makeStyles(() =>
  createStyles({
    SyncIcon: { animation: "$spin 7s linear infinite" },
    "@keyframes spin": {
      "0%": { transform: "rotate(360deg)" },
      "100%": { transform: "rotate(0deg)" },
    }
  })
);

export default function Header() {
  const classes = useStyles();
  const { isSaving } = useGlobalState();

  const syncIcon = isSaving
    ? <SyncIcon className={classes.SyncIcon} style={{ fill: '#fff' }} />
    : <CloudDoneIcon style={{ fill: '#fff' }} />;

  const syncText = isSaving
    ? 'Syncing progress...'
    : 'All changes saved'

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-around">
            <Grid item sx={ 7 }>
              <Filters />
            </Grid>
            <Grid item container xs={ 5 } alignItems="center" justifyContent="flex-end">
              <Typography>{syncText}</Typography>
              <IconButton>{syncIcon}</IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
