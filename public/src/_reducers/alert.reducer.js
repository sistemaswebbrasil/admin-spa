// O redutor de redux redutor gerencia o estado do aplicativo para alertas / notificações de torradeira,
// ele atualiza o estado quando uma ação de alerta é despachada de qualquer lugar no aplicativo, por exemplo,
// quando uma alertConstants.SUCCESSação é despachada, o redutor atualiza o estado de alerta para um objeto com
// type: 'alert-success'e message: action.message.
import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
    case alertConstants.SUCCESS:
        return {
            type: 'alert-success',
            message: action.message
        };
    case alertConstants.ERROR:
        return {
            type: 'alert-danger',
            message: action.message
        };
    case alertConstants.CLEAR:
        return {};
    default:
        return state;
    }
}