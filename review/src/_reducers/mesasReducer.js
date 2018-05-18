// import mesaConstants from '../_constants/mesas';
import { mesaConstants } from '../_constants';

const defaultState = {
    items: [],
    mesa: {},
    loading: false,
    errors: {}
};

export default (state = defaultState, action = {}) => {
    switch (action.type) {
    case mesaConstants.GETALL_REQUEST:
        return {
            ...state,
            mesa: {},
            loading: true
        };
    case mesaConstants.GETALL_SUCCESS:
        return {
            ...state,
            items: action.mesas,
            mesa: {},
            loading: false
        };
    case mesaConstants.GETALL_FAILURE:
        return {
            ...state,
            mesa: {},
            error: action.error,
            loading: false
        };

    case mesaConstants.NEW_REQUEST: {
        return {
            ...state,
            mesa: {}
        };
    }
    case mesaConstants.CREATE_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case mesaConstants.CREATE_SUCCESS: {
        return {
            ...state,
            mesa: action.payload,
            loading: false
        };
    }
    case mesaConstants.GET_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case mesaConstants.GET_SUCCESS: {
        return {
            ...state,
            mesa: action.mesa,
            loading: false
        };
    }
    case mesaConstants.CREATE_FAILURE: {
        return {
            ...state,
            errors: action.error,
            loading: false
        };
    }
    case mesaConstants.UPDATE_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case mesaConstants.UPDATE_SUCCESS: {
        return {
            ...state,
            mesa: action.payload,
            loading: false
        };
    }
    case mesaConstants.UPDATE_FAILURE: {
        return {
            ...state,
            errors: action.error,
            loading: false
        };
    }
    case mesaConstants.DELETE_REQUEST:
        return {
            ...state,
            loading: true,
            items: state.items.map(mesa =>
                mesa.id === action.id
                    ? { ...mesa, deleting: true }
                    : mesa
            )
        };
    case mesaConstants.DELETE_SUCCESS:
        return {
            loading: false,
            items: state.items.filter(mesa => mesa.id !== action.id)
        };
    case mesaConstants.DELETE_FAILURE:
        return {
            ...state,
            loading: false,
            items: state.items.map(mesa => {
                if (mesa.id === action.id) {
                    const { ...mesaCopy } = mesa;
                    return { ...mesaCopy, deleteError: action.error };
                }
                return mesa;
            })
        };
    default:
        return state;
    }
};
