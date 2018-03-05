let axios = require("axios");

export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {
    return axios.post('/api/login', {email, password})
        .then(function (response) {
            let { token , user} = response.data.data;
            
            user.token = token;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
        .catch(function (error) {
            return Promise.reject(error.message);
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {    
    return axios.get('api/users')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(error.message);
    });
}