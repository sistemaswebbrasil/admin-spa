import contactConstants from "../constants/contacts";

export default function contacts(state = {}, action) {
  switch (action.type) {
    case contactConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case contactConstants.GETALL_SUCCESS:
      return {
        items: action.contacts
      };
    case contactConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case contactConstants.NEW_REQUEST: {
      return {
        ...state
      };
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
        contact: action.contact
      };
    }
    case contactConstants.CREATE_FAILURE: {
      return {
        ...state,
        errors: action.error,
        loading: false
      };
    }
    case contactConstants.GET_REQUEST: {
      return {
        ...state,
        loading: false
      };
    }
    case contactConstants.GET_SUCCESS:
      return {
        contact: action.contact
      };
    case contactConstants.GET_FAILURE:
      return {
        error: action.error
      };

    // case 'SAVE_CONTACT_PENDING': {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }contactConstants.GET_SUCCESS

    // case 'SAVE_CONTACT_FULFILLED': {
    //   return {
    //     ...state,
    //     contacts: [...state.contacts, action.payload.data],
    //     errors: {},
    //     loading: false
    //   }
    // }

    // case 'SAVE_CONTACT_REJECTED': {
    //   const data = action.payload.response.data;
    //   // convert feathers error formatting to match client-side error formatting
    //   const { name, last_name, phone, email } = data.errors;
    //   const errors = { global: data.message, name: name, last_name, phone, email };
    //   return {
    //     ...state,
    //     errors: errors,
    //     loading: false
    //   }
    // }

    default:
      return state;
  }
}
