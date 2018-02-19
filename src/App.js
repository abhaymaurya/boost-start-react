import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//components
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import UserList from './components/UserList/UserList';
//sub components
import Header from './sub-components/Header/Header';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/reset-password' component={ResetPassword}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/user-list' component={UserList}/>
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
