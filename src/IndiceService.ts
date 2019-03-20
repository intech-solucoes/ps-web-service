import { BaseService, TipoRequisicao } from "@intechprev/service";

class IndiceService extends BaseService {
    constructor() {
        super("indice");
    }
    
    BuscarPorCdIndice = (indice: string) => this.CriarRequisicao(TipoRequisicao.GET, null, `porCdIndice/${indice}`);

    BuscarPorCdIndicePeriodo = (indice: string, dtInicio: string, dtFim: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porCdIndicePeriodo/${indice}/${this.FormatarData(dtInicio)}/${this.FormatarData(dtFim)}`);
}

export default new IndiceService();