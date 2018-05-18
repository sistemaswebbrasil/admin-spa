import { pedidoConstants } from '../_constants';

const defaultState = {
    items: [],
    pedido: {},
    loading: false,
    errors: {}
};

export default (state = defaultState, action = {}) => {
    switch (action.type) {
    case pedidoConstants.GETALL_REQUEST:
        return {
            ...state,
            pedido: {},
            loading: true
        };
    case pedidoConstants.GETALL_SUCCESS:
        return {
            ...state,
            items: action.pedidos,
            pedido: {},
            loading: false
        };
    case pedidoConstants.GETALL_FAILURE:
        return {
            ...state,
            pedido: {},
            error: action.error,
            loading: false
        };

    case pedidoConstants.NEW_REQUEST: {
        return {
            ...state,
            pedido: {}
        };
    }
    case pedidoConstants.CREATE_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case pedidoConstants.CREATE_SUCCESS: {
        return {
            ...state,
            pedido: action.payload,
            loading: false
        };
    }
    case pedidoConstants.GET_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case pedidoConstants.GET_SUCCESS: {
        return {
            ...state,
            pedido: action.pedido,
            loading: false
        };
    }

    case pedidoConstants.GETBYMESA_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case pedidoConstants.GETBYMESA_SUCCESS: {
        return {
            ...state,
            items: action.pedidos,
            loading: false
        };
    }
    case pedidoConstants.GETBYMESA_FAILURE: {
        return {
            ...state,
            errors: action.error,
            loading: false
        };
    }
    case pedidoConstants.CREATE_FAILURE: {
        return {
            ...state,
            errors: action.error,
            loading: false
        };
    }
    //---------------------------BYMESA
    case pedidoConstants.UPDATE_REQUEST: {
        return {
            ...state,
            loading: true
        };
    }
    case pedidoConstants.UPDATE_SUCCESS: {
        return {
            ...state,
            pedido: action.payload,
            loading: false
        };
    }
    case pedidoConstants.UPDATE_FAILURE: {
        return {
            ...state,
            errors: action.error,
            loading: false
        };
    }
    case pedidoConstants.DELETE_REQUEST:
        return {
            ...state,
            loading: true,
            items: state.items.map(pedido =>
                pedido.id === action.id
                    ? { ...pedido, deleting: true }
                    : pedido
            )
        };
    case pedidoConstants.DELETE_SUCCESS:
        return {
            loading: false,
            items: state.items.filter(pedido => pedido.id !== action.id)
        };
    case pedidoConstants.DELETE_FAILURE:
        return {
            ...state,
            loading: false,
            items: state.items.map(pedido => {
                if (pedido.id === action.id) {
                    const { ...pedidoCopy } = pedido;
                    return { ...pedidoCopy, deleteError: action.error };
                }
                return pedido;
            })
        };
    default:
        return state;
    }
};
