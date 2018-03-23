import alertConstants from '../constants/alert';

export default function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message,
                icon: 'checkmark'
            };
        case alertConstants.ERROR:
            return {
                type: 'negative',
                message: action.message,
                icon: 'warning'
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}