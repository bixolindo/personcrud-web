import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export interface AlertMessageProps {
    type ?: Color,
    message: string,
    open: boolean,
}

export default function AlertMessage({type, message, open} : AlertMessageProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000}>
        <Alert severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
