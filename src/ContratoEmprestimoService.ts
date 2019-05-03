import { BaseService, TipoRequisicao } from "@intechprev/service";

class ContratoEmprestimoService extends BaseService {
    constructor() {
        super("contratoEmprestimo");
    }
    
    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);
    BuscarPorSqContrato = (sqContrato: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `porSqContrato/${sqContrato}`);
}

export default new ContratoEmprestimoService();