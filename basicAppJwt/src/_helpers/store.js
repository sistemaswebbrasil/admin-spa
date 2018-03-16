// Um Store possui toda a árvore do estado da sua aplicação.
// A única maneira de mudar o estado dentro dele é enviar uma ação nela.
// Um Store não é uma classe.É apenas um objeto com alguns métodos.
// Para criá - lo, passe sua função de redução de raiz para.createStore
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);