import { BaseService, TipoRequisicao } from "@intechprev/service";

class ProcessoBeneficioService extends BaseService {
    constructor() {
        super("processoBeneficio");
    }

    BuscarPorPlano = (plano: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);
}

export default new ProcessoBeneficioService();