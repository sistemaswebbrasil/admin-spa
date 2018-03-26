import contactConstants from "../constants/contacts";
import { alert as alertActions } from "./alert";
import { SubmissionError } from "redux-form";
var axios = require("axios");

export function getAll(url) {
  return dispatch => {
    dispatch(request());

    axios.get("contacts")
      .then(function (response) {
        dispatch(success(response.data))
      })
      .catch(function(error) {
        let message = "";
        if (error.response) {
          error.response.data.message
            ? (message = error.response.data.message)
            : (message = error.response.data.error);
        } else {
          message = "Error 404";
        }
        dispatch(failure(message));
        dispatch(alertActions.error(message));
      });
  };
  function request() { return { type: contactConstants.GETALL_REQUEST }; }
  function success(contacts) { return { type: contactConstants.GETALL_SUCCESS, payload:contacts }; }
  function failure(error) { return { type: contactConstants.GETALL_FAILURE, error }; }
}

export function getContact(id) {
  return dispatch => {
    dispatch(request(id));

    axios.get("contacts/"+id)
      .then(function (response) {

        dispatch(success(response))
      })
      .catch(function(error) {
        let message = "";
        if (error.response) {
          error.response.data.message
            ? (message = error.response.data.message)
            : (message = error.response.data.error);
        } else {
          message = "Error 404";
        }
        dispatch(failure(id, message));
        dispatch(alertActions.error(message));
      });
  };

  function request(id) { return { type: contactConstants.GET_REQUEST, id }; }
  function success(contact) { return { type: contactConstants.GET_SUCCESS, payload: contact }; }
  function failure(id, error) { return { type: contactConstants.GET_FAILURE, id, error }; }
}

// return dispatch({
//   type: 'FETCH_CONTACT',
//   payload: client.get(`${url}/${id}`)
// })



export function updateContact(contact) {
  return dispatch => {
    dispatch(request(contact));
    return axios.put("contacts/" + contact.id,  contact )
      .then(function (response) {
        dispatch(alertActions.success(response.data.message))
        dispatch(success(response.data.data))
      })
      .catch(function (error) {
        let message = '';
        let errors = [];
        if (!error.response) {
          message = 'network error';
        } else {
          message = error.response.data.error
          if (error.response.data.data) {
            message = error.response.data.message;
            const { name, last_name, phone, email } = error.response.data.data;
            errors = { global: message, name: name, last_name, phone, email };
          }
        }
        dispatch(failure(errors))
        dispatch(alertActions.error(message))
        return Promise.reject(errors);
      });
  };

  function request(user) { return { type: contactConstants.UPDATE_REQUEST, contact }; }
  function success(user) { return { type: contactConstants.UPDATE_REQUEST, payload: contact }; }
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
    return axios
      .post("contacts", contact)
      .then(function(response) {
        dispatch(alertActions.success(response.data.message));
        dispatch(success(response.data.data));
      })
      .catch(function(error) {
        let message = "";
        let errors = [];
        if (!error.response) {
          message = "network error";
        } else {
          message = error.response.data.error;
          if (error.response.data.data) {
            message = error.response.data.message;
            const { name, last_name, phone, email } = error.response.data.data;
            errors = { global: message, name: name, last_name, phone, email };
          }
        }
        dispatch(failure(errors));
        dispatch(alertActions.error(message));
        return Promise.reject(errors);
      });
  };

  function request(contact) { return { type: contactConstants.CREATE_REQUEST, contact }; }
  function success(contact) { return { type: contactConstants.CREATE_SUCCESS, payload:contact }; }
  function failure(error) { return { type: contactConstants.CREATE_FAILURE, error }; }


}

function successResponse(response) {
  return response.data.data;
}
