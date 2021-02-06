import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
    },
}));
export default function User(props) {
    
const classes = useStyles();
  return (
    <React.Fragment>
        <strong>{props.name}</strong>
        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} />
    </React.Fragment>
  );
}