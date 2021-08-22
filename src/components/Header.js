//This will build navigation bar that will be shown on every page
//When not logged in, buttons are: Home, Posts, Login
//When logged in, buttons are: Home, Posts, Profile, Logout
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import TokenUtilities from '../utilities/token';
import Posts from './Posts';
// import Profile from './Profile';
import Home from './Home';
import Login from './Login';
import Register from './Register2';

const Header = ({isLoggedIn, setToken}) => {
    function handleLogout(e) {
        e.preventDefault();
        TokenUtilities.removeToken();
        setToken(null);
    }

    return (
        <header>
            <h1>Strangers Things</h1>
            {/* <Link to="/">
                <h3>Strangers Things</h3>
            </Link> */}
            {
                isLoggedIn ?
                    <>
                        <Link to="/Posts"><Posts /></Link>
                        {/* <Link to="/profile"><Profile /><h1>Welcome {user}</h1></Link> */}
                        <Link to="/Home"><Home /></Link>
                        <button onClick={handleLogout}>Logout</button>
                    </> :
                    <>
                        <Link to="/Login">
                            <button>Log in</button>
                        </Link>
                        <Link to="/Register2">
                            <button>Register</button>
                        </Link>
                    </>
            }
        </header>
    )
}
export default Header;

