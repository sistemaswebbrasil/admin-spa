var axios = require('axios');
export const pedidoService = {
    create,
    getAll,
    getById,
    update,
    getByMesa,
    delete: _delete
};


function getAll() {
    return axios.get('api/pedidos')
        .then(successResponse)
        .catch(errorResponse);
}

function getById(id) {
    return axios.get('api/pedidos/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function getByMesa(mesa) {
    return axios.get('api/pedidos/' + mesa + '/mesa')
        .then(successResponse)
        .catch(errorResponse);
}



function create(pedido) {
    return axios.post('api/create', pedido)
        .then(successResponse)
        .catch(errorResponse);
}

function update(pedido) {
    return axios.put('/api/pedidos/' + pedido.id, { pedido })
        .then(successResponse)
        .catch(errorResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete('/api/pedidos/' + id)
        .then(successResponse)
        .catch(errorResponse);
}

function successResponse(response) {
    return response.data.data;
}

/*eslint-disable no-console */
/*eslint-disable no-debugger */
function errorResponse(error) {
    let { message } = error;
    let data = [{ message }];
    if ((error.response !== undefined) && (error.response.data.data)) {
        message = error.response.data.message;
        data = error.response.data.data;
    }
    let err = Object.assign(data, { message }, { _error: message });
    return Promise.reject(err);
}
