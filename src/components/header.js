import React from 'react';
  
import logo from '../logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AlbumIcon from '@material-ui/icons/Album';
  
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        minHeight: 200,
        width: '100%',
    },
    logo: {
      display: 'block',
    },
    account: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    leaderboard: {
        position: 'absolute',
        top: theme.spacing(11),
        right: theme.spacing(2),
    },
    points: {
        position: 'absolute',
        top: theme.spacing(20),
        right: theme.spacing(2),
    },
}));
  export default function Header(props) {
  const classes = useStyles();

  const goToPage = (event, page) => {
    event.preventDefault();
    props.setPage(page)
  }
  const goToMain = (event) => goToPage(event, 'main')
  const goToLeaderboard = (event) => goToPage(event, 'leaderboard')
  const goToAccount = (event) => goToPage(event, 'account')
  const goToPoints = (event) => goToPage(event, 'points')
    return (
        <header className="App-header" >
          <nav className={classes.root}>
            <Link href="#" onClick={goToMain} className={classes.logo}>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            
            <Link href="#" onClick={goToAccount} className={classes.account}>
            <Fab color="primary" aria-label="account" >
                <AccountCircleIcon />
            </Fab>
            </Link>

            <Link href="#" onClick={goToLeaderboard} className={classes.leaderboard}>
            <Fab color="primary" aria-label="leaderboard">
                <EmojiEventsIcon />
            </Fab>
            </Link>

            <Link href="#" onClick={goToPoints} className={classes.points}>
            <Fab color="primary" aria-label="points">
                <AlbumIcon />
            </Fab>
            </Link>
          </nav>
        </header>
    );
  }
  