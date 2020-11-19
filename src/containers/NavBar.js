import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const loggedIn = useSelector(state => state.loggedIn)

    return (
        <div id="navbar">
            <img src="" id="home"/>
            <div id="navbar-buttons-container">
                <div id="navbar-buttons">
                    {loggedIn
                        ?  
                            <>
                                <div className="navbar-button">New Guide</div>
                                <div className="navbar-button">View Profile</div>
                                <div className="navbar-button">Log Out</div>
                            </>
                        :
                            <>
                                <div className="navbar-button">Register</div>
                                <div className="navbar-button">Login</div>
                            </>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default NavBar