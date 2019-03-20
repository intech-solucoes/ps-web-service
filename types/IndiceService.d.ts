import { BaseService } from "@intechprev/service";
declare class IndiceService extends BaseService {
    constructor();
    BuscarPorCdIndice: (indice: string) => Promise<any>;
    BuscarPorCdIndicePeriodo: (indice: string, dtInicio: string, dtFim: string) => Promise<any>;
}
declare const _default: IndiceService;
export default _default;
