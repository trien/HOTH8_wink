import React from 'react';
import Page from '../components/page';
import Account from '../components/account';
import AccountForm from '../components/accountForm';

import { makeStyles } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AccountPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Page title="">
            <div><AccountCircleIcon  style={{ fontSize: 40 }}/></div>
          <div className={classes.root}>
            <Account />
            {/* <AccountForm /> */}
          </div>
        </Page>
    </React.Fragment>
  );
}

