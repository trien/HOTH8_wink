import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/list';
import Card from '@material-ui/core/card';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function AccountPage() {
  const classes = useStyles();
  return (
        <List>
          <Card className={classes.root}>
             <FormControl className={classes.margin}>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <TextField id="input-with-icon-grid" label="email" />
                    </Grid>
                    <Grid item>
                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Button variant="outlined" color="primary">
                            Login 
                        </Button>
                    </ButtonGroup>
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
            </Card>
        </List>
  );
}

