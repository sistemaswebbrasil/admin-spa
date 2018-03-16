// Contém os criadores de ação do Redux para ações relacionadas a alertas do aplicativo.
// Por exemplo, para exibir uma mensagem de alerta de sucesso com o texto 'Great Job!' você pode
// ligar dispatch(alertActions.success('Great Job!'));.
import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}