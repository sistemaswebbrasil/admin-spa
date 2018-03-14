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
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user };}
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user };}
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