import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaSalarioContribuicaoService extends BaseService {
    constructor() {
        super("fichaSalarioContribuicao");
    }
    
    BuscarPorPlano = (plano: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);
}

export default new FichaSalarioContribuicaoService();