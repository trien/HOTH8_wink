import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Page(props) {
    
  return (
    <React.Fragment>
        <Paper elevation={5} style={{paddingBottom:"20px"}}><br/>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
          <main>
              {props.children}
          </main>
        </Paper>
      <CssBaseline />
    </React.Fragment>
  );
}