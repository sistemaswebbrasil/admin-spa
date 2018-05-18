import contactConstants from "../constants/contacts";
import { alert as alertActions } from "./alert";
import contactService from '../services/contactService';

export function getAll(url) {
  return dispatch => {
    dispatch(request());
    return contactService.getAll()
      .then(
        contact => {
          dispatch(success(contact.data));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error.message));
          return Promise.reject(error);
        }
      );
  };
  function request() { return { type: contactConstants.GETALL_REQUEST }; }
  function success(contacts) { return { type: contactConstants.GETALL_SUCCESS, payload:contacts }; }
  function failure(error) { return { type: contactConstants.GETALL_FAILURE, error }; }
}

export function getContact(id) {
  return dispatch => {
    dispatch(alertActions.clear());
    dispatch(request(id));
    return contactService.getById(id)
      .then(
        contact => {
          dispatch(success(contact.data));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error.message));
          return Promise.reject(error);
        }
      );
  };
  function request(id) { return { type: contactConstants.GET_REQUEST, id }; }
  function success(contact) { return { type: contactConstants.GET_SUCCESS, payload: contact }; }
  function failure(id, error) { return { type: contactConstants.GET_FAILURE, id, error }; }
}

export function getByEmail(email) {



  return contactService.getByEmail(email)
    .then(
      contact => {
        if (contact.data.length){
          // throw { email: 'That email is used' }
          throw new Error({ email: 'That email is used' });
        }
      },
      error => {
        // throw { email: 'Server offline' }
        throw new Error({ email: 'Server offline' });
      }
    );
}

export function updateContact(contact) {
  return dispatch => {
    dispatch(alertActions.clear());
    dispatch(request(contact));
    return contactService.update(contact)
      .then(
        contact => {
          dispatch(alertActions.success(contact.message));
          dispatch(success(contact.data));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error.message));
          return Promise.reject(error);
        }
      );
  };
  function request(contact) { return { type: contactConstants.UPDATE_REQUEST, contact }; }
  function success(contact) { return { type: contactConstants.UPDATE_SUCCESS, payload: contact }; }
  function failure(error) { return { type: contactConstants.UPDATE_FAILURE, error }; }
}

export function newContact() {
  return dispatch => {
    dispatch({
      type: contactConstants.NEW_REQUEST
    });
  };
}

export function createContact(contact) {
  return dispatch => {
    dispatch(alertActions.clear());
    dispatch(request(contact));
    return contactService.create(contact)
      .then(
        contact => {
          dispatch(alertActions.success(contact.message ));
          dispatch(success(contact.data));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error.message));
          return Promise.reject(error);
        }
      );
  };function failure(error) { return { type: contactConstants.GETALL_FAILURE, error }; }
  function request(contact) { return { type: contactConstants.CREATE_REQUEST, contact }; }
  function success(contact) { return { type: contactConstants.CREATE_SUCCESS, payload:contact }; }
  function failure(error) { return { type: contactConstants.CREATE_FAILURE, error }; }
}

export function deleteContact(id) {
  return dispatch => {
    dispatch(request(id));
    contactService.delete(id)
      .then(
        res => {
          dispatch(success(res.data));
        },
        error => {
          dispatch(failure(id, error.data));
        }
      );
  };

  function request(id) { return { type: contactConstants.DELETE_REQUEST, id }; }
  function success(id) { return { type: contactConstants.DELETE_SUCCESS, id }; }
  function failure(id, error) { return { type: contactConstants.DELETE_FAILURE, id, error }; }
}
