import { BaseService, TipoRequisicao } from "@intechprev/service";

class VersaoService extends BaseService {
    constructor() {
        super("/");
    }
    
    Verificar() {
        return this.CriarRequisicao(TipoRequisicao.GET);
    }
}

export default new VersaoService();