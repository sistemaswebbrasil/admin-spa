import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import contacts from './contacts';
import alert  from './alert';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    contacts,
    alert,
    form: formReducer
});
