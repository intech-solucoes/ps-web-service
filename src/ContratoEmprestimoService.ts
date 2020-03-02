import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class ContratoEmprestimoService extends BaseService {
    constructor() {
        super("contratoEmprestimo");
    }
    
    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);
    BuscarPorSqContrato = (sqContrato: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `porSqContrato/${sqContrato}`);
    GerarRelatorio = (sqContrato: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `GerarExtrato/${sqContrato}`, null, TipoResposta.Blob);
}

export default new ContratoEmprestimoService();