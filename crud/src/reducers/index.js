import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./items";
import contacts from "./contactReducer";
//
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
//
import alert from "./alert";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  contacts,
  authentication,
  registration,
  users,
  alert,
  form: formReducer
});
