import React from 'react';
import Page from '../components/page';

import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  toast: {
    padding: theme.spacing(3),
    fontSize: '1.5em',
    marginBlockEnd: theme.spacing(3),
  },
}));

export default function PointPage(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Page title="Leaderboard">
          <AlbumIcon  style={{ fontSize: 40 }} />
            <div className={classes.root}>
                
                <Card className={classes.toast}>
                    <p>Points are the unit of participation in your team.<br/>
                    You can see the <Link onClick={() => props.setPage('leaderboard')}>Leaderboard</Link> to check who is the most active there.</p>
                    <p>Each month points are reseted and now you will be able to be the first !</p>
                    <p>More soon ...</p>
                </Card>
            </div>
        </Page>
    </React.Fragment>
  );
}