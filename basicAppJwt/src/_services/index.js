// A camada _services lida com todas as comunicações http com a Api com a aplicação React, cada serviço encapsula as
// chamadas api para um tipo de conteúdo(por exemplo, usuários) e expõe métodos para executar várias operações(por exemplo,
// operações CRUD).Os serviços também podem ter métodos que não envolvem chamadas http, por exemplo, o userService.logout()método
// simplesmente remove um item do armazenamento local.
export * from './user.service';
