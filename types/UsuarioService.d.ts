import { BaseService } from "@intechprev/service";
declare class UsuarioService extends BaseService {
    constructor();
    VerificarLogin: () => Promise<any>;
    Login: (cpf: string, senha: string) => Promise<any>;
    Pesquisar: (cpf: string, nome: string) => Promise<any>;
    Selecionar: (cpf: string) => Promise<any>;
    PrimeiroAcesso: (cpf: string, dataNascimento: string) => Promise<any>;
    TrocarSenha: (senhaAntiga: string, senhaNova: string) => Promise<any>;
    Menu: () => Promise<any>;
}
declare const _default: UsuarioService;
export default _default;
