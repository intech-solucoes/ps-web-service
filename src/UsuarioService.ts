import { BaseService, TipoRequisicao } from "@intechprev/service";

class UsuarioService extends BaseService {
    constructor() {
        super("usuario");
    }
    
    VerificarLogin = () => this.CriarRequisicao(TipoRequisicao.GET);

    Login = (cpf: string, senha: string) => this.CriarRequisicao(TipoRequisicao.POST, null, "login", { Cpf: cpf, Senha: senha });

    PrimeiroAcesso = (cpf: string, dataNascimento: string) => 
        this.CriarRequisicao(TipoRequisicao.POST, null, "criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });

    TrocarSenha = (senhaAntiga: string, senhaNova: string) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, "alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });
}

export default new UsuarioService();