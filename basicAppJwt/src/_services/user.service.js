// O serviço de usuário encapsula todas as chamadas api do backend para executar operações CRUD nos dados do usuário,
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
    return axios.post('/api/login', {
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
    return axios.get('api/users')
        .then(successResponse)
        .catch(errorResponse);
}

function getById(id) {
    return axios.get('api/users/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function register(user) {
    return axios.post('api/register', user)
        .then(successResponse)
        .catch(errorResponse);
}

function update(user) {
    return axios.put('/api/users/' + user.id, {user})
        .then(successResponse)
        .catch(errorResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('/api/users/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function successResponse(response) {
    return response.data.data;
}

function errorResponse(error) {
    return Promise.reject(
        error.response.data.message ?
            error.response.data.message :
            error.response.data.error
    );
}