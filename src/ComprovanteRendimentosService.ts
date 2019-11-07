import { BaseService, TipoRequisicao } from "@intechprev/service";

class ComprovanteRendimentosService extends BaseService {
    constructor() {
        super("ComprovanteRendimentos");
    }
    
    BuscarDatas = () => this.CriarRequisicao(TipoRequisicao.GET, null, `BuscarDatas`);
    BuscarPorAnoCalendario = (anoCalendario: string) => this.CriarRequisicao(TipoRequisicao.GET, null, `BuscarPorAnoCalendario/${anoCalendario}`);
}

export default new ComprovanteRendimentosService();