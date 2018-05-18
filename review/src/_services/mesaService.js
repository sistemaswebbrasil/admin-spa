var axios = require('axios');
export const mesaService = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};


function getAll() {
    return axios.get('api/mesas')
        .then(successResponse)
        .catch(errorResponse);
}

function getById(id) {
    return axios.get('api/mesas/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function create(mesa) {
    return axios.post('api/create', mesa)
        .then(successResponse)
        .catch(errorResponse);
}

function update(mesa) {
    return axios.put('/api/mesas/' + mesa.id, {mesa})
        .then(successResponse)
        .catch(errorResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('/api/mesas/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function successResponse(response) {
    return response.data.data;
}

// function errorResponse(error) {
//     /*eslint-disable no-console */
//     console.log(error);
//     return Promise.reject(
//         error.response.data.message ?
//             error.response.data.message :
//             error.response.data.error
//     );
// }

/*eslint-disable no-console */
/*eslint-disable no-debugger */
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
