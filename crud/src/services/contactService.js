// O serviço de usuário encapsula todas as chamadas api do backend para executar operações CRUD nos dados do usuário,
//  bem como o log e o aplicativo de exemplo.Os métodos de serviço são exportados através do contactServiceobjeto na parte
// superior do arquivo e a implementação de cada método está localizada nas declarações de função abaixo.
var axios = require('axios');
export default  {
    login,
    logout,
    create,
    getAll,
    getById,
    getByEmail,
    update,
    delete: _delete
};

function login(email, password) {
    return axios.post('/api/login', {
        email,
        password
    }).then(function (response) {
        let { token, contact } = response.data.data;
        contact.token = token;
        localStorage.setItem('contact', JSON.stringify(contact));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + contact.token;
        return contact;
    }).catch(errorResponse);
}

function logout() {
    // remove contact from local storage to log contact out
    localStorage.removeItem('contact');
}

function getAll() {
    return axios.get('contacts')
        .then(successResponse)
        .catch(errorResponse);
}

function getById(id) {
    return axios.get('contacts/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

//contacts/by-email/{email}

function getByEmail(email) {
    return axios.get('contacts/by-email/' + email)
        .then(successResponse)
        .catch(errorResponse);
}

function create(contact) {
    return axios.post('contacts', contact)
        .then(successResponse)
        .catch(errorResponse);
}

function update(contact) {
    return axios.put('contacts/' + contact.id,  contact )
        .then(successResponse)
        .catch(errorResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('contacts/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function successResponse(response) {
    return response.data;
}

function errorResponse(error) {
    let {message} = error;
    let data = [{ message }];
    if ((error.response !== undefined) && (error.response.data.data)) {
        message = error.response.data.message;
        data = error.response.data.data;
    }
    let err = Object.assign(data, { message }, { _error:message} );
    return Promise.reject(err);
}