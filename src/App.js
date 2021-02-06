import React, { Component, useState }  from 'react';

import './App.css';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import ItemPage from './pages/itemPage';
import LeaderboardPage from './pages/leaderboardPage';


import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login'
    };
  }
  render() {
    return (
    <div className="App">
      <Container maxWidth="md">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
      {['login', 'main', 'item', 'leaderboard'].map((page, key) =>
          <Button onClick={() => this.setState({ page: page })} key={key}>{page} </Button>
      )}
      </ButtonGroup>
        {this.state.page == 'login' && <LoginPage/>}
        {this.state.page == 'main' && <MainPage/>}
        {this.state.page == 'item' && <ItemPage/>}
        {this.state.page == 'leaderboard' && <LeaderboardPage/>}
      </Container>
    </div>
    );
  }
}
export default App;