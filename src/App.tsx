import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/mainPages/MainPage';
import SigninPage from './pages/signinPages/SigninPage';
import Navbar from './components/navbar/Navbar';
import AccountPage from './pages/AccountPage/AccountPage';
import { ToggleSidebarContext } from './Helpers/Context';

function App() {

  const [showSidebar, setShowSidebar] = useState<any>(false);

  return (
    <ToggleSidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      <div className="top">
          <Navbar />
      </div>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/signin" exact render={() => <SigninPage />} />
        <Route path="/account" exact render={() => <AccountPage />} />
      </Switch>
    </Router>
    </ToggleSidebarContext.Provider>
  );
}

export default App;
