const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT';

import TokenUtilities from './token';

export default {
    makeRequest: async function(path, method, data) {
        const token = TokenUtilities.getToken();
        const defaultHeaders = {
            'Content-Type': 'application/json'
        }
        if (token) {
            defaultHeaders['authorization'] = `Bearer ${token}`;
        }
        const options = {
            method,
            headers: defaultHeaders
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(BASE_URL + path, options);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
}












