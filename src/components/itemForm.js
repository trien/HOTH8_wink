import React, { useState, useEffect } from "react";

import api from "../winkApi";
import Points from "./points";
import coffee from "../images/coffee.png";
import feedback from "../images/feedback.png";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/Add";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EventIcon from "@material-ui/icons/Event";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import StarsIcon from "@material-ui/icons/Stars";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import DescriptionIcon from "@material-ui/icons/Description";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  mediaLabel: {
    top: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  media: {
    height: "200px",
    marginTop: theme.spacing(2),
    backgroundSize: "contain",
    width: "200px",
  },
}));

const images = {
  coffee,
  feedback,
};

export default function ItemCard() {
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setType(event.target.value);

    const presetData = {
      title: "",
      date: "",
      description: "",
    };
    switch (event.target.value) {
      case "help":
        presetData.title = "I need help";
        presetData.description = "If someone can help me on ...";
        break;
      case "event":
        presetData.title = "Event : ";
        break;
      case "challenge":
        presetData.title = "Challenge : ";
        presetData.description = `Goal : 
Reward : `;
        break;
      case "coffee":
        presetData.title = "Coffee time";
        presetData.description = "Let's have a coffee break!";
        break;
      case "game":
        presetData.title = "Midday gaming";
        presetData.description = "Have fun before going back to work";
        presetData.date = "After midday lunch for 30 min";
        break;
    }

    setTitle(presetData.title);
    setDate(presetData.date);
    setDescription(presetData.description);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const saveForm = (e) => {
    if (title != '') {
      const form = {
        title,
        description,
        date
      }
      api.addEvent(form, () => {
        setSnackOpen(true);
        setType('');
        setTitle('');
        setDate('');
        setDescription('');
      })
    }
  }
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackOpen(false);
  }
  
  useEffect(() => {
  }, []);
  return (
    <section className={classes.root}>
      {showForm && (
        <form id="form-item">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">PRESET</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>No preset</MenuItem>
                  <MenuItem value={"help"}>
                    <LiveHelpIcon />
                    Need help
                  </MenuItem>
                  <MenuItem value={"event"}>
                    <EventIcon />
                    Create a Event
                  </MenuItem>
                  <MenuItem value={"challenge"}>
                    <StarsIcon /> Challenge your team
                  </MenuItem>
                  <MenuItem value={"coffee"}>
                    <FreeBreakfastIcon />
                    Coffee time ?{" "}
                  </MenuItem>
                  <MenuItem value={"game"}>
                    <SportsEsportsIcon />
                    Game time ?{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  placeholder="TITLE"
                  value={title}
                  onChange={titleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextFieldsIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  placeholder="DATE / TIME"
                  value={date}
                  onChange={dateChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WatchLaterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  placeholder="DESCRIPTION"
                  multiline
                  value={description}
                  onChange={descriptionChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <Grid container>
                  <Grid item xs={12}>
                    <InputLabel className={classes.mediaLabel}>
                      ILLUSTRATION
                    </InputLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper>
                      <Link>
                        <CardMedia
                          className={classes.media}
                          image={coffee}
                          title="Event title"
                        />
                      </Link>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper>
                      <Link>
                        <CardMedia
                          className={classes.media}
                          image={feedback}
                          title="Event title"
                        />
                      </Link>
                    </Paper>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Points d="+" nb="4" desc="Creation of event" />
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
                onClick={() => saveForm()}
              >
                <Button color="primary" variant="contained">
                  <AssignmentReturnedIcon
                    style={{ fontSize: 40 }}
                  ></AssignmentReturnedIcon>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => showForm(false)}
                  title="close"
                >
                  <HighlightOffIcon style={{ fontSize: 40 }}></HighlightOffIcon>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
            message="Link made !"
            action={
              <React.Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnack}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </form>
      )}
      {!showForm && (
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowForm(true)}
            title="new item"
          >
            <AddIcon style={{ fontSize: 40 }}></AddIcon>
            Create a link
          </Button>
        </ButtonGroup>
      )}
    </section>
  );
}
