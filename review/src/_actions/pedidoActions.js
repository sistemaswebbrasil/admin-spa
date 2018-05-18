import { pedidoConstants } from '../_constants';
import { pedidoService } from '../_services';
import { alertActions } from './';

export const pedidoActions = {
    getAll,
    delete: _delete,
    getPedidos

};

function getAll() {
    return dispatch => {
        dispatch(request());

        pedidoService.getAll()
            .then(
                pedidos => dispatch(success(pedidos)),
                // error => dispatch(failure(error))
                error => {
                    dispatch(alertActions.error(error.message));
                    dispatch(failure(error.message));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: pedidoConstants.GETALL_REQUEST }; }
    function success(pedidos) { return { type: pedidoConstants.GETALL_SUCCESS, pedidos }; }
    function failure(error) { return { type: pedidoConstants.GETALL_FAILURE, error }; }
}

export function getPedidos(mesa) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request(mesa));
        return pedidoService.getByMesa(mesa)
            .then(
                pedidos => {
                    /*eslint-disable no-console */
                    /*eslint-disable no-debugger */
                    console.log(pedidos);
                    dispatch(

                        success(pedidos)
                    );
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                    return Promise.reject(error);
                }
            );
    };
    function request(mesa) { return { type: pedidoConstants.GETBYMESA_REQUEST, mesa }; }
    function success(pedidos) { return { type: pedidoConstants.GETBYMESA_SUCCESS, pedidos }; }
    function failure(mesa, error) { return { type: pedidoConstants.GETBYMESA_FAILURE, mesa, error }; }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

    return dispatch => {
        dispatch(request(id));

        pedidoService.delete(id)
            .then(
                data => {
                    dispatch(success(data));
                    /* eslint-disable no-console */
                    console.log(data);

                },
                error => {
                    dispatch(failure(id, error));
                }
            );

    };

    function request(id) { return { type: pedidoConstants.DELETE_REQUEST, id }; }
    function success(id) { return { type: pedidoConstants.DELETE_SUCCESS, id }; }
    function failure(id, error) { return { type: pedidoConstants.DELETE_FAILURE, id, error }; }
}
