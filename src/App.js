import React, { Component }  from 'react';


import './App.css';
import Header from './components/header';
import MainPage from './pages/mainPage';
import LeaderboardPage from './pages/leaderboardPage';
import AccountPage from './pages/accountPage';


import Container from '@material-ui/core/Container';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main'
    };
  }
  componentDidMount = () => {
  }
  render() {
    return (
    <div className="App">
      <Container maxWidth="md">
        <Header setPage={(page) => this.setState({ page: page })}/>
        {this.state.page == 'main' && <MainPage/>}
        {this.state.page == 'leaderboard' && <LeaderboardPage/>}
        {this.state.page == 'account' && <AccountPage/>}
      </Container>
    </div>
    );
  }
}
export default App;