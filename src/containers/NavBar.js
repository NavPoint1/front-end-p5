import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div id="navbar">
            <div id="home">Home</div>
            <div className="navbar-button">New Guide</div>
            <div className="navbar-button">Login</div>
            <div className="navbar-button">Log Out</div>
            <div className="navbar-button">View Profile</div>
            <div className="navbar-button">Register</div>
        </div>
    )
}

export default NavBar