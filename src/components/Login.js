//After a successful login, website takes you to Profile, where messages are shown:
// In Profile:
//      There's a personalized welcome message
//      "Messages to Me:"
//      populated messages sent to user from different users (probably using map function?)
//      An alert that says "Success: Succesfully logged in!"
//      "Messages from Me:"
//      populated messages sent from user to different users (probably using map function?)
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../utilities/api';
import TokenUtilities from '../utilities/token';


const Login = ({setToken}) => {
    let history = useHistory();
    
    const [user, setUser] = useState({username: '', password: ''});

    async function storeToken() {
        try {
            // const response = await fetch(`${BASE_URL}/login`, {
            //     method: 'POST',
            //     header: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({user: user})
            // });
            // const data = await response.json();
            //replace 'vb-token'
            const data = await API.makeRequest('/users/login', 'POST', {user});
            TokenUtilities.setToken(data.data.token);
            setToken(data.data.token);
            console.log(data.data.token);
            console.log(data.token);
            // localStorage.setItem('vb-token', data.token);
        } catch (error) {
            console.log(error);
        } finally {
            history.push("/Home");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        storeToken();
    }

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
        console.log(user, setUser)
    }

    // const LogOut = () => {
    //     localStorage.clear();
    //     window.location.href = "/Login";
    // }

    return (
        <div className="login">
            {/* <Link to='/'>Strangers Things</Link> */}
            <form onSubmit={handleSubmit}>
                <input type='text'
                        required
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        placeholder='username'/>
                <input type='password'
                        required
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='password'></input>
                <input type='password-confirmation'
                        required
                        name='password-confirmation'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='password-confirmation'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;