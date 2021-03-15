import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/mainPages/MainPage';
import SigninPage from './pages/signinPages/SigninPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/signin" exact render={() => <SigninPage />} />
      </Switch>
    </Router>
  );
}

export default App;
