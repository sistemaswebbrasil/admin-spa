// O reduxor de usuários redux gerencia a usersseção do estado da aplicação que é usada pelo HomePage
// para exibir uma lista de usuários e permitir a exclusão de usuários.
import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
    case userConstants.GETALL_REQUEST:
        return {
            loading: true
        };
    case userConstants.GETALL_SUCCESS:
        return {
            items: action.users
        };
    case userConstants.GETALL_FAILURE:
        return {
            error: action.error
        };
    default:
        return state;
    }
}