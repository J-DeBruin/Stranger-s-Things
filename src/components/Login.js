import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const BASE_URL = 'http://localhost.1234';
    const [user, setUser] = useState({username: '', password: ''});

    async function storeToken() {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
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
    }

    return (
        <div>
            <Link to='/'>Virtual Bartender</Link>
            <form onSubmit={(event) => {handleSubmit}}>
                <input type='text'
                        required
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        placeholder='username' />
                <input type='password'
                        required
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='password'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}