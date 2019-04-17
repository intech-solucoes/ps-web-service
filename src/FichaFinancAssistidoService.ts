import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFinancAssistidoService extends BaseService {
    constructor() {
        super("fichaFinancAssistido");
    }

    BuscarUltimaPorProcesso = (sqProcesso: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `ultimaPorProcesso/${sqProcesso}`);

    BuscarDatasPorProcesso = (sqProcesso: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `datasPorProcesso/${sqProcesso}`);

    BuscarPorProcessoReferencia = (sqProcesso: number, data: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porProcessoReferencia/${sqProcesso}/${this.FormatarData(data)}`);

    BuscarRelatorioPorProcessoReferencia = (sqProcesso: number, data: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `contrachequePorProcessoReferencia/${sqProcesso}/${this.FormatarData(data)}`);
}

export default new FichaFinancAssistidoService();