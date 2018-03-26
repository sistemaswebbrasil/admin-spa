import contactConstants from '../constants/contacts';

const defaultState = {
  items: [],
  contact: {},
  loading: false,
  errors: {}
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case contactConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case contactConstants.GETALL_SUCCESS:
      return {
        ...state,
        // items: action.contacts,
        items: action.payload.data,
        loading: false
      };
    case contactConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case contactConstants.NEW_REQUEST : {
      return {
        ...state,
        contact: {}
      }
    }

    case contactConstants.CREATE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case contactConstants.CREATE_SUCCESS: {
      return {
        ...state,
        contact: action.payload,
        loading: false
      }
    }

    case contactConstants.GET_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case contactConstants.GET_SUCCESS : {
      return {
        ...state,
        contact: action.payload.data,
        loading: false
      }
    }

    case contactConstants.CREATE_FAILURE: {
        return {
          ...state,
          errors: action.error,
          loading: false
        }
      }
    default:
      return state;
  }
}