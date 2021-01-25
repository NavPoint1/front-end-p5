import React, { useEffect } from 'react';
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

const App = () => {
  const loggedInUser = useSelector(state => state.loggedInUser)

  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
  
    script1.innerHTML="const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};"
    script2.src = "https://wow.zamimg.com/widgets/power.js";

    script1.async = true;
    script2.async = true;
  
    document.head.appendChild(script1);
    document.head.appendChild(script2);
  
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    }
  }, []);

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
