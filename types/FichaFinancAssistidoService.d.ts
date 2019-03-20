import { BaseService } from "@intechprev/service";
declare class FichaFinancAssistidoService extends BaseService {
    constructor();
    BuscarPorProcesso: (sqProcesso: number) => Promise<any>;
}
declare const _default: FichaFinancAssistidoService;
export default _default;
