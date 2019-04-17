import { BaseService } from "@intechprev/service";
declare class DadosPessoaisService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    BuscarDataAposentadoria: () => Promise<any>;
}
declare const _default: DadosPessoaisService;
export default _default;
