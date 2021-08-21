//This will build navigation bar that will be shown on every page
//When not logged in, buttons are: Home, Posts, Login
//When logged in, buttons are: Home, Posts, Profile, Logout
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import TokenUtilities from '../utilities/token'

const Header = ({isLoggedIn, setToken}) => {
    function handleLogout(e) {
        e.preventDefault();
        TokenUtilities.removeToken();
        setToken(null);
    }

    return (
        <header>
            <Link to="/">
                <h3>Stranger Things</h3>
            </Link>
            {
                isLoggedIn ?
                    <>
                        <Link to="/drinks">Drinks</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </> :
                    <>
                        <div></div>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </>
            }
        </header>
    )
}
export default Header;

