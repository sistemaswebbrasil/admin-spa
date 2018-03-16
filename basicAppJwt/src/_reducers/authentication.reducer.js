// O redutor de autenticação redux administra o estado relacionado às ações de logon(e logout), no logon bem - sucedido,
// o objeto de usuário atual e um sinalizador de Registro registrado são armazenados na authenticationseção do estado da
// aplicação.Na falha de logout ou login, o estado de autenticação é configurado para um objeto vazio e,
// durante o login(entre solicitação de login e sucesso / falha), o estado de autenticação possui um indicador de
// loggingIn definido como verdadeiro e um objeto de usuário com os detalhes do usuário que está tentando Entrar.
import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
            loggingIn: true,
            user: action.user
        };
    case userConstants.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            user: action.user
        };
    case userConstants.LOGIN_FAILURE:
        return {};
    case userConstants.LOGOUT:
        return {};
    default:
        return state;
    }
}