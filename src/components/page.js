import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function Page(props) {
    
  return (
    <React.Fragment>
        <h2>{props.title}</h2>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
        <main>
            {props.children}
        </main>
      <CssBaseline />
    </React.Fragment>
  );
}