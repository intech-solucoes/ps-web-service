import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFinancAssistidoService extends BaseService {
    constructor() {
        super("fichaFinancAssistido");
    }

    BuscarPorProcesso = (sqProcesso: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porProcesso/${sqProcesso}`);
}

export default new FichaFinancAssistidoService();