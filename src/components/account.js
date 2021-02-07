import React, {useState, useEffect} from 'react';

import Points from './points'
import api from "../winkApi";

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/list';
import Card from '@material-ui/core/card';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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

  const [points, setPoints] = useState(0);
  useEffect(() => {
    api.getPoints(points => {
      setPoints(points)
    })
  }, []);

  return (
    <List>
    <Card className={classes.root}>
        <FormControl className={classes.margin}>
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Email</strong> email@email.com
              </Typography></Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                  <strong>First name</strong> John 

              </Typography></Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Last Name</strong> Smith
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Points nb={points} desc="You earned with your participation"/>
            </Grid>

            <Grid item xs={12}>
                <Button  color="primary" variant="contained" onClick={() => setShowForm(true)} title="new item">Log out&nbsp;
                <ExitToAppIcon style={{ fontSize: 20 }}/></Button>
            </Grid>
        </Grid>
        </FormControl>
    </Card>
    </List>
  );
}

