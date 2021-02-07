import React from 'react';
import User from '../components/user';
import users from '../stub/user.json'
import pointsData from '../stub/points.json'
import Points from './points'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';

const getLeaderboard = function () {
    return pointsData.map(p => {
      return {
        user: users.find( u => u.id == p.user),
        points: p.count
      }
    }).slice(0, 3)
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function RecipeReviewCard() {
const classes = useStyles();
const leaderboard = getLeaderboard()
  return (
      <List>
          {leaderboard.map((l, key) => 
          <Card className={classes.root} key={key}>
          <CardHeader
              avatar={
                  <ListItem>
                      <User user={l.user}/>
                  </ListItem>
              }
              title={<Grid container >
                <Grid item>{l.user.sFirstName + ' ' + l.user.sLastName}</Grid>
                <Points nb={l.points}/>
              </Grid>}
          />
          </Card>
          )}
      </List>
  );
}
