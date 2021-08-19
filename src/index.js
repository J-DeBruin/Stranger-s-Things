import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import BASE_URL from './api/index';
import Login from './components/Login';
import Posts from './components/Posts';


const user = {
    "username": "charliejustin",
    "password": "Password1234"
}

const App = () => {
    const [postList, setPostList] = useState([]);
    // useEffect({}, [postList]);
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
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
    return (<div><Login /><Posts postList = {postList} setPostList = {setPostList} /></div>)
}
export default App;
ReactDOM.render(<App />,document.getElementById("app"))