import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Posts from './components/Posts';
import Header from './components/Header';
import Register from './components/Register2';
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
        <div>
        <Header isLoggedIn={isLoggedIn} setToken={setToken} />
        {/* <nav className='navBar'> */}
                {/* <Link to="/Home">HOME</Link> */}
                {/* <Link to="/Posts">POSTS</Link> */}
                {/* <Link to="/Profile">PROFILE</Link> */}
                {/* <Link to="/Register2">REGISTER</Link> */}
                {/* <Link to="/Login">LOGIN</Link> */}
        {/* </nav> */}
        <main>
            <Switch>
            <Route exact path="/Login"><Login setToken={setToken} /></Route>
            <Route exact path="/Register2"><Register setToken={setToken} /></Route>      
            <Route exact path="/Posts"><Posts /></Route>
            <Route exact path="/Home"><Home /></Route>     
            {/* <Route path="/Profile"><Profile /></Route>
                    <h1>Profile</h1> */}                  
            </Switch>
        </main>
            {/* <Header isLoggedIn={isLoggedIn} setToken={setToken} />
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
                </Switch> */}
            {/* </main> */}
        </div>
    )
}

export default App;
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("app"))