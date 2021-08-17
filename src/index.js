import React from 'react';
import ReactDOM from 'react-dom';
import BASE_URL from './api/index';
import Login from './components/Login'; 

const user = {
    "username": "charliejustin",
    "password": "Password1234"
}

const App = () => {
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
    return (<div><Login /></div>)
}
export default App;
ReactDOM.render(<App />,document.getElementById("app"))