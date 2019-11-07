import { BaseService } from "@intechprev/service";
declare class ComprovanteRendimentosService extends BaseService {
    constructor();
    BuscarDatas: () => Promise<any>;
    BuscarPorAnoCalendario: (anoCalendario: string) => Promise<any>;
}
declare const _default: ComprovanteRendimentosService;
export default _default;
