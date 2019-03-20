import { BaseService, TipoRequisicao } from "@intechprev/service";

class PlanoVinculadoService extends BaseService {
    constructor() {
        super("planoVinculado");
    }
    
    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);

    BuscarPorPlano = (plano: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);
}

export default new PlanoVinculadoService();