import { BaseService, TipoRequisicao } from "@intechprev/service";

class DadosPessoaisService extends BaseService {
    constructor() {
        super("dadosPessoais");
    }
    
    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);
    BuscarDataAposentadoria = () => this.CriarRequisicao(TipoRequisicao.GET, null, "dataAposentadoria");
}

export default new DadosPessoaisService();