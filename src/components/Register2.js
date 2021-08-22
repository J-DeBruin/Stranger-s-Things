import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../utilities/api';
import TokenUtilities from '../utilities/token';

const Register = ({setToken}) => {
    let history = useHistory();
    const [user, setUser] = useState({username: '', password: ''});
    async function storeToken() {
        try {
            const data = await API.makeRequest('/users/register', 'POST', {user});
            console.log(data);
            TokenUtilities.setToken(data.token);
            setToken(data.token);
        } catch (error) {
            console.log(error);
        } finally {
            history.push('/');
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

    return (
        <div>
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
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;