// Contém os criadores de ação Redux para ações relacionadas aos usuários.Os criadores de ação pública são expostos através do
// userActionsobjeto na parte superior do arquivo e as implementações de funções estão localizadas abaixo,
//
// A maioria das ações para usuários são ações assíncronas que são compostas por múltiplas sub-ações,
// porque é necessário fazer uma solicitação http e aguardar a resposta antes de completar.
// As ações assíncronas tipicamente despacham uma requestação antes de executar uma tarefa assíncrona
// (por exemplo, uma solicitação http) e, em seguida, despachar uma ação successo  com errorbase no resultado da tarefa assíncrona.
//
// Por exemplo, o login()criador de ação executa as seguintes etapas:
//
// envia uma LOGIN_REQUESTação comdispatch(request({ username }));
// chama a tarefa assíncrona userService.login(username, password)
// despacha um LOGIN_SUCCESScom dispatch(success(user)); se o login foi bem - sucedido ou envia uma
// LOGIN_FAILUREação dispatch(failure(error)); se o login falhou
// Para manter o código arrumado, coloquei sub - criadores de ação em funções aninhadas dentro de cada função de criador de
// ação assíncrono.Por exemplo, a login()função contém 3 funções de criador de ação aninhadas request(), success()e failure()que
// retornam as ações e LOGIN_REQUEST, respectivamente.Colocar os criadores de sub - ação em funções aninhadas também me permite
// dar - lhes nomes padrão como solicitação, sucesso e falha sem entrar em conflito com outros nomes de funções porque eles só
// existem dentro do escopo da função pai.LOGIN_SUCCESSLOGIN_FAILURE
import { userConstants } from '../constants/userConstants';
import { userService } from '../services/userService';
import { alert as alertActions } from "./alert";

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete

};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        return userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                    return Promise.reject(error);
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user };}
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: user };}
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error };}
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST }; }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error }; }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user }; }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user };}
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error };}
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
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

    function request(id) { return { type: userConstants.DELETE_REQUEST, id }; }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id }; }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error }; }
}