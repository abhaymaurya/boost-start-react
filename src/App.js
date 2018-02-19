import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//components
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ResetPassword from './components/ResetPassword/ResetPassword';
//sub components
import Header from './sub-components/Header/Header';

const players = [
  {
    id: 1,
    name: '11111'
  },
  {
    id: 2,
    name: '22222'
  },
  {
    id: 3,
    name: '33333'
  },
  {
    id: 4,
    name: '44444'
  }, 
  {
    id: 5,
    name: '55555'
  }
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Tornadoes Website!</h1>
    </div>
  );
}

const Schedule = () => {
  return(
    <div>
      <ul>
        <li>6/5 @ Evergreens</li>
        <li>6/8 vs Kickers</li>
        <li>6/14 @ United</li>
      </ul>
    </div>
  );
}

const Player = (props) => {
  const playerId = parseInt(props.match.params.number);
  if (!playerId) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>Player with {playerId} will be fetched.</h1>
    </div>
  );
}

const FullRoster = () => {
  return (
    <div>
      <ul>
        {
          players.map(p => (
            <li key={p.id}>
              <Link to={`/roster/${p.id}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const Roster = () => {
  return (
    <div>
      <h2>This is a roster page!</h2>
      <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
      </Switch>
    </div>
  );
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/reset-password' component={ResetPassword}/>
      </Switch>
    </main>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
