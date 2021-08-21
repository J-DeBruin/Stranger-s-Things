import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Login from './components/Login';
import Posts from './components/Posts';
import Header from './components/Header';
import Register from './components/Register';

import TokenUtilities from './utilities/token';

const user = {
    "username": "charliejustin",
    "password": "Password1234"
}

const App = () => {
    // const [postList, setPostList] = useState([]);
    const [token, setToken] = useState(TokenUtilities.getToken());
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(function() {
        setIsLoggedIn(!!token);
    }, [token]);

    
    async function getToken() {
        try {
            const response = await fetch(`${BASE_URL}/api/2105-OKU-RM-WEB-PT/posts`, {
                method: "POST",
                header: {
                    "Content-Type" : "application/json",
                    'Authorization': 'SHA256:NfHOe+4/AAeQpjhK/8/G7yAyybqEc9dTV++BUeE59b8'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json;
            // console.log(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setToken={setToken} />
            <Switch>
                <Route path="/posts"><Posts /></Route>
                <Route path="/login"><Login setToken={setToken} /></Route>
                <Route path="/profile"><Profile /></Route>
                <Route exact path="/"><Home /></Route>
            </Switch>
            <main>
                <Switch>
                    <Route path="/login"><Login setToken={setToken} /></Route>
                    <Route path="/posts"><Posts /></Route>
                </Switch>
            </main>
        </>
    )
}

export default App;
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("app"))