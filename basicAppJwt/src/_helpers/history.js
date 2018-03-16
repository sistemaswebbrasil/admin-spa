// O histórico é um objeto de histórico personalizado usado pelo Roteador de Reacção,
// o motivo pelo qual usei um objeto de histórico personalizado em vez do incorporado no Roteador de Reacção é habilitar
// o redirecionamento de usuários de componentes React externos, por exemplo, das ações do usuário após o logon bem - sucedido.
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();