// O serviço de usuário encapsula todas as chamadas api do backend para executar operações CRUD nos dados do usuário,
//  bem como o log e o aplicativo de exemplo.Os métodos de serviço são exportados através do userServiceobjeto na parte
// superior do arquivo e a implementação de cada método está localizada nas declarações de função abaixo.
var axios = require('axios');
export const userService = {
    login,
    logout,
    getAll
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
    }).catch(function (error) {
        return Promise.reject(
            error.response.data.message ?
                error.response.data.message :
                error.response.data.error
        );
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