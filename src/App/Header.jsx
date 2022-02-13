import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SyncIcon from '@mui/icons-material/Sync';
import { createStyles, makeStyles } from "@mui/styles";
import { useGlobalState } from '../Provider';

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>All changes saved</Typography>
          <IconButton>
            { syncIcon }
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
