import React from 'React';
import { ReactDOM } from 'React';
import BASE_URL from 'api/index.js'; 

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
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json;
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
}

App();
ReactDOM.render(<App />,document.getElementByID("app"))