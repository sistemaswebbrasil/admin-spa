import { mesaConstants } from '../_constants';
import { mesaService } from '../_services';
import { alertActions } from './';

export const mesaActions = {
    getAll,
    delete: _delete,
    getMesa

};

function getAll() {
    return dispatch => {
        dispatch(request());

        mesaService.getAll()
            .then(
                mesas => dispatch(success(mesas)),
                // error => dispatch(failure(error))
                error => {
                    dispatch(alertActions.error(error.message));
                    dispatch(failure(error.message));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: mesaConstants.GETALL_REQUEST }; }
    function success(mesas) { return { type: mesaConstants.GETALL_SUCCESS, mesas }; }
    function failure(error) { return { type: mesaConstants.GETALL_FAILURE, error }; }
}

export function getMesa(id) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request(id));
        return mesaService.getById(id)
            .then(
                mesa => {
                    /*eslint-disable no-console */
                    /*eslint-disable no-debugger */
                    console.log(mesa);
                    dispatch(

                        success(mesa)
                    );
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                    return Promise.reject(error);
                }
            );
    };
    function request(id) { return { type: mesaConstants.GET_REQUEST, id }; }
    function success(mesa) { return { type: mesaConstants.GET_SUCCESS,  mesa }; }
    function failure(id, error) { return { type: mesaConstants.GET_FAILURE, id, error }; }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

    return dispatch => {
        dispatch(request(id));

        mesaService.delete(id)
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

    function request(id) { return { type: mesaConstants.DELETE_REQUEST, id }; }
    function success(id) { return { type: mesaConstants.DELETE_SUCCESS, id }; }
    function failure(id, error) { return { type: mesaConstants.DELETE_FAILURE, id, error }; }
}
