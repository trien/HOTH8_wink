import React from 'react';
import Page from '../components/page';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Page title="Login">
              
          <FormControl className={classes.margin}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="email" />
                </Grid>
              </Grid>
              <Button variant="outlined" color="primary">
                Login 
              </Button>
            </div>
          </FormControl>
        </Page>
    </React.Fragment>
  );
}

