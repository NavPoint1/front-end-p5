import React from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

import crownIcon from '../assets/CrownIconTransparent.png'
import Button from '@material-ui/core/Button'

const NavBar = () => {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.loggedInUser)

    return (
        <div id="navbar">
            <Link to="/">
                <div id="home-container">
                    <img src={crownIcon} id="home" />
                </div>
            </Link>
            <div id="navbar-buttons-container">
                <div id="navbar-buttons">
                    {Object.keys(loggedInUser).length !== 0
                        ?  
                            <>
                                <Link to="/guides/new">
                                    <Button>
                                    <div className="navbar-button">New Guide</div>
                                    </Button>
                                </Link>
                                <Link to="/profile">
                                    <Button>
                                    <div className="navbar-button">View Profile</div>
                                    </Button>
                                </Link>
                                <Link to="/logout">
                                    <Button onClick={() => dispatch(logout())}>
                                        <div className="navbar-button">Log Out</div>
                                    </Button>
                                </Link>
                            </>
                        :
                            <>
                                <Link to="/register">
                                    <Button>
                                        <div className="navbar-button">Register</div>
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button>
                                        <div className="navbar-button">Login</div>
                                    </Button>
                                </Link>
                            </>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default NavBar