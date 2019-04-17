import { BaseService } from "@intechprev/service";
declare class FichaContribPrevidencialService extends BaseService {
    constructor();
    BuscarPorPlano: (plano: number) => Promise<any>;
    BuscarSaldos: (plano: number) => Promise<any>;
    BuscarDatasExtratoPorPlano: (plano: number) => Promise<any>;
}
declare const _default: FichaContribPrevidencialService;
export default _default;
