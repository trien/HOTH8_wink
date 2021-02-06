import React from 'react';
import Page from '../components/page';


import {FormControl,
  InputLabel,
  Input,
  FormHelperText} from '@material-ui/core';


export default function ItemPage() {
  return (
    <React.Fragment>
        <Page title="Item">
        <FormControl>
          <InputLabel htmlFor="my-input">title</InputLabel>
          <Input id="input-title" aria-describedby="helper-input-title" />
          <FormHelperText id="helper-input-title">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Date</InputLabel>
          <Input id="input-date" aria-describedby="helper-input-date" />
          <FormHelperText id="helper-input-date">Set the event date.</FormHelperText>
        </FormControl>
        </Page>
    </React.Fragment>
  );
}