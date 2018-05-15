// Um Store possui toda a árvore do estado da sua aplicação.
// A única maneira de mudar o estado dentro dele é enviar uma ação nela.
// Um Store não é uma classe.É apenas um objeto com alguns métodos.
// Para criá - lo, passe sua função de redução de raiz para.createStore
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_reducers';
// Opção de mostar um painel mostarndo o status do reducer
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware
    ))
);