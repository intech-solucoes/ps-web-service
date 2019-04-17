import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaContribPrevidencialService extends BaseService {
    constructor() {
        super("fichaContribPrevidencial");
    }
    
    BuscarPorPlano = (plano: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);
    BuscarSaldos = (plano: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `saldos/${plano}`);
    BuscarDatasExtratoPorPlano = (plano: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `datasExtratoPorPlano/${plano}`);
}

export default new FichaContribPrevidencialService();