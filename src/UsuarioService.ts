import { BaseService, TipoRequisicao } from "@intechprev/service";

class UsuarioService extends BaseService {
    constructor() {
        super("usuario");
    }
    
    VerificarLogin = () => this.CriarRequisicao(TipoRequisicao.GET);

    Login = (cpf: string, senha: string) => this.CriarRequisicao(TipoRequisicao.POST, null, "login", { Cpf: cpf, Senha: senha });

    Pesquisar = (cpf: string, nome: string) => this.CriarRequisicao(TipoRequisicao.POST, null, "pesquisar", { Cpf: cpf, Nome: nome });

    Selecionar = (cpf: string) => this.CriarRequisicao(TipoRequisicao.POST, null, "selecionar", { Cpf: cpf });

    PrimeiroAcesso = (cpf: string, dataNascimento: string) => 
        this.CriarRequisicao(TipoRequisicao.POST, null, "criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });

    TrocarSenha = (senhaAntiga: string, senhaNova: string) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, "alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });

    Menu = () => this.CriarRequisicao(TipoRequisicao.GET, null, "menu");
}

export default new UsuarioService();