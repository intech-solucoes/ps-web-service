import { BaseService } from "@intechprev/service";
declare class FichaSalarioContribuicaoService extends BaseService {
    constructor();
    BuscarPorPlano: (plano: number) => Promise<any>;
}
declare const _default: FichaSalarioContribuicaoService;
export default _default;
