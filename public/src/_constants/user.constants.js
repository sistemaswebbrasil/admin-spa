// O objeto de constantes do usuário contém os tipos de ação do usuário redux que podem ser enviados no aplicativo de reação,
// as ações assíncronas que executam pedidos HTTP envolvem uma solicitação seguida de uma resposta de sucesso ou erro,
// então cada uma dessas três etapas é representada por uma ação redux.
export const userConstants = {
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',
};
