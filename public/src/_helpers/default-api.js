
export function defaultApi() {
    let axios = require("axios");

    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    axios.defaults.baseURL = 'http://api.app.com';    
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';        
    if (user && user.token) {
        return axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    } else {
        return null;
    }
}