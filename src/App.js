import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './containers/NavBar'

// Containers
import GuidesIndex from './containers/GuidesIndex'
import GuideCreator from './containers/GuideCreator'
import ProfileContainer from './containers/ProfileContainer'
import GuideShow from './containers/GuideShow'

// Components
import About from './components/About'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import LogOut from './components/LogOut'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() =>  <GuidesIndex /> }/>
          <Route exact path="/guides/new" render={() => <GuideCreator /> }/>
          {/* user can only see their own profile for now? */}
          <Route exact path="/profile" render={() => <ProfileContainer /> }/>
          <Route exact path="/guides/:id" render={() => <GuideShow />}/>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/register" component={SignupForm} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
