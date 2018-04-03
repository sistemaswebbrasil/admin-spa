// O serviço de usuário encapsula todas as chamadas  do backend para executar operações CRUD nos dados do usuário,
//  bem como o log e o aplicativo de exemplo.Os métodos de serviço são exportados através do userServiceobjeto na parte
// superior do arquivo e a implementação de cada método está localizada nas declarações de função abaixo.
var axios = require('axios');
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    return axios.post('/login', {
        email,
        password
    }).then(function (response) {
        let { token, user } = response.data.data;
        user.token = token;
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
        return user;
    }).catch(errorResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return axios.get('/users')
        .then(successResponse)
        .catch(errorResponse);
}

function getById(id) {
    return axios.get('/users/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function register(user) {
    return axios.post('/register', user)
        .then(successResponse)
        .catch(errorResponse);
}

function update(user) {
    return axios.put('/users/' + user.id, {user})
        .then(successResponse)
        .catch(errorResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('/users/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function successResponse(response) {
    return response.data.data;
}

function errorResponse(error) {
    let { message } = error;
    let data = [{ message }];
    if ((error.response !== undefined) && (error.response.data)) {
        message = error.response.data.error;
        if (error.response.data.data) {
            data = error.response.data.data;
        }
    }
    let err = Object.assign(data, { message }, { _error: message });
    return Promise.reject(err);
}