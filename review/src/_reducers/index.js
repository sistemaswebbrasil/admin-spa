// A pasta _reducers contém todos os redutores Redux para o projeto, cada redutor atualiza uma parte diferente do estado da
// aplicação em resposta às ações redux despachadas.
//
// Se você não está familiarizado com Redux redutores você pode aprender sobre eles em https://redux.js.org/basics/reducers .
import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import mesas  from './mesasReducer';
import pedidos from './pedidosReducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    mesas,
    pedidos
});

export default rootReducer;
