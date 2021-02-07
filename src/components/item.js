import React from 'react';

import Points from './points'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import users from '../stub/user.json'
import coffee from '../images/coffee.png'
import feedback from '../images/feedback.png'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  join: {
    marginLeft: 'auto',
    marginRight: '5px',
    display: 'flex',
    alignItems: 'center',
  },
}));
const images = {
  coffee, feedback
}
export default function ItemCard(props) {

const user = users.find(u => u.id == props.item.idUser)
const classes = useStyles();
const getUserInitial = (u) => u.sLastName.substr(0,1) + u.sFirstName.substr(0,1)
  return (
    <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {getUserInitial(user)}
            </Avatar>
            }
            title={<h2>{props.item.sNameEvent}</h2>}
            subheader={props.item.dDateEvent}
        />
        {props.item.image && <CardMedia
            className={classes.media}
            image={images[props.item.image]}
            title="Event title"
        />}
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.item.sInfoEvent}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <div className={classes.join}>
              <IconButton aria-label="join" color="secondary">
              <CheckBoxIcon /><span>Join</span>
              </IconButton>
              <Points d="+" nb="2" desc="Joining the event" />
            </div>
        </CardActions>
    </Card>
  );
}
