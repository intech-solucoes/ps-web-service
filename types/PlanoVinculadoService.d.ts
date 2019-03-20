import { BaseService } from "@intechprev/service";
declare class PlanoVinculadoService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    BuscarPorPlano: (plano: number) => Promise<any>;
}
declare const _default: PlanoVinculadoService;
export default _default;
