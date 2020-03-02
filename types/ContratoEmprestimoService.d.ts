import { BaseService } from "@intechprev/service";
declare class ContratoEmprestimoService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    BuscarPorSqContrato: (sqContrato: number) => Promise<any>;
    GerarRelatorio: (sqContrato: number) => Promise<any>;
}
declare const _default: ContratoEmprestimoService;
export default _default;
