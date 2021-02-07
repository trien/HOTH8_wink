import React from 'react';
import Page from '../components/page';
import Leaderboard from '../components/leaderboard';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LeaderboardPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Page title="Leaderboard">
            <div className={classes.root}>
                <Leaderboard></Leaderboard>
            </div>
        </Page>
    </React.Fragment>
  );
}