import contactConstants from "../constants/contacts";

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
        contact: {},
        loading: true
      };
    case contactConstants.GETALL_SUCCESS:
      return {
        ...state,
        items: action.payload,
        contact: {},
        loading: false
      };
    case contactConstants.GETALL_FAILURE:
      return {
        ...state,
        contact: {},
        error: action.error,
        loading: false
      };

    case contactConstants.NEW_REQUEST: {
      return {
        ...state,
        contact: {}
      }
    }
    case contactConstants.CREATE_REQUEST: {
      return {
        ...state,
        loading: true
      };
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
    case contactConstants.GET_SUCCESS: {
      return {
        ...state,
        contact: action.payload,
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
    case contactConstants.UPDATE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case contactConstants.UPDATE_SUCCESS: {
      return {
        ...state,
        contact: action.payload,
        loading: false
      }
    }
    case contactConstants.UPDATE_FAILURE: {
      return {
        ...state,
        errors: action.error,
        loading: false
      }
    }
    case contactConstants.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        items: state.items.map(contact =>
          contact.id === action.id
            ? { ...contact, deleting: true }
            : contact
        )
      };
    case contactConstants.DELETE_SUCCESS:
      return {
        loading: false,
        items: state.items.filter(contact => contact.id != action.id)
      };
    case contactConstants.DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        items: state.items.map(contact => {
          if (contact.id === action.id) {
            const { ...contactCopy } = contact;
            return { ...contactCopy, deleteError: action.error };
          }
          return contact;
        })
      };
    default:
      return state;
  }
}
