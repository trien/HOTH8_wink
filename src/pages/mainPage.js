import React from 'react';
import Page from '../components/page';

import ItemForm from '../components/itemForm';
import ItemList from '../components/itemList';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/card';

const useStyles = makeStyles((theme) => ({
  toast: {
    padding: theme.spacing(3),
    fontSize: '1.5em',
    marginBlockEnd: theme.spacing(3),
  },
}));
export default function MainPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Page title="">
          <Card className={classes.toast}>
              Welcome to <strong>Wink</strong>, the platform dedicated to social groups in the need of <strong>connection</strong>
          </Card>
          <ItemForm />
          <ItemList />
          <ItemForm />
        </Page>
    </React.Fragment>
  );
}