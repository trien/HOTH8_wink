import React from 'react';
import User from '../components/user';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';

const getLeaderboard = function () {
    return [
        {name: 'Bob Gartner'},
        {name: 'Jenna Ortello'},
        {name: 'Pete Kilig'},
    ]
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
            {leaderboard.map((user, key) => 
            <Card className={classes.root} key={key}>
            <CardHeader
                avatar={
                    <ListItem>
                        <User user={user}/>
                    </ListItem>
                }
                title={user.name}
            />
            </Card>
            )}
        </List>
  );
}
