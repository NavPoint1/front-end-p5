import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom'


// Containers
import NavBar from './containers/NavBar'
import GuidesIndex from './containers/GuidesIndex'
import GuideCreator from './containers/GuideCreator'
import ProfileContainer from './containers/ProfileContainer'
import GuideShow from './containers/GuideShow'
import ThemeCreator from './containers/ThemeCreator'

// Components
import About from './components/About'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import LogOut from './components/LogOut'
import SignupForm from './components/SignupForm'

function App() {
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <div id="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() =>  <GuidesIndex /> }/>
        <Route exact path="/guides/new" render={() => <GuideCreator edit="false"/>}/>
        <Route exact path="/themes/new" render={() => <ThemeCreator />}/>
        {/* user can only see their own profile for now? */}
        <Route exact path="/profile" render={() => 
          Object.keys(loggedInUser).length === 0
            ?
              <Redirect to="/" />
            :
              <ProfileContainer />
          }/>
        <Route exact path="/guides/:id/edit" render={() => <GuideCreator edit="true"/>}/>
        <Route exact path="/guides/:id" render={() => <GuideShow />}/>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" render={() => 
          Object.keys(loggedInUser).length === 0
          ?
            <Redirect to="/" />
          :
            <LogOut />
        }/>
        <Route exact path="/register" component={SignupForm} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
