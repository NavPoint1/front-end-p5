import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Containers
import GuidesIndex from './GuidesIndex'
import GuideCreator from './GuideCreator'
import ProfileContainer from './ProfileContainer'
import GuideShow from './GuideShow'

// Components
import About from '../components/About'
import NotFound from '../components/NotFound'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const MainContainer = (props) => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => { <GuidesIndex /> }}/>
                    <Route exact path="/new" render={() => { <GuideCreator /> }}/>
                    {/* user can only see their own profile for now? */}
                    <Route exact path="/profile" render={(props) => { <ProfileContainer /> }}/>
                    <Route exact path="/guide/:id" render={() => { 
                        // 404 if guide does not exist? check state or do fetch call?
                        /* let painting = this.state.paintingData.find(painting => painting.id === props.match.params.id)
                        return painting ? <PaintingDetails painting={painting} /> : <NotFound /> */
                        <GuideShow />
                    }}/>
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/register" component={SignupForm} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainContainer