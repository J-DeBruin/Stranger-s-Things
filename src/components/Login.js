import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com';

const Login = () => {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
    const [user, setUser] = useState({username: '', password: ''});

    async function storeToken() {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user: user})
            });
            const data = await response.json();
            //replace 'vb-token'
            console.log(data);
            localStorage.setItem('vb-token', data.token);
        } catch (error) {
            console.error(error);
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

    const LogOut = () => {
        localStorage.clear();
        window.location.href = "/login";
    }

    const isLoggedIn = () => {

    }

    return (
        <div>
            {/* <Link to='/'>Virtual Bartender</Link> */}
            <form onSubmit={(event) => {handleSubmit}}>
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