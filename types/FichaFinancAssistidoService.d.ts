import { BaseService } from "@intechprev/service";
declare class FichaFinancAssistidoService extends BaseService {
    constructor();
    BuscarUltimaPorProcesso: (sqProcesso: number) => Promise<any>;
    BuscarDatasPorProcesso: (sqProcesso: number) => Promise<any>;
    BuscarPorProcessoCompetencia: (sqProcesso: number, data: string) => Promise<any>;
}
declare const _default: FichaFinancAssistidoService;
export default _default;
