"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("@intechprev/service");
var ComprovanteRendimentosService = /** @class */ (function (_super) {
    __extends(ComprovanteRendimentosService, _super);
    function ComprovanteRendimentosService() {
        var _this = _super.call(this, "ComprovanteRendimentos") || this;
        _this.BuscarDatas = function () { return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "BuscarDatas"); };
        _this.BuscarPorAnoCalendario = function (anoCalendario) { return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "BuscarPorAnoCalendario/" + anoCalendario); };
        return _this;
    }
    return ComprovanteRendimentosService;
}(service_1.BaseService));
exports.default = new ComprovanteRendimentosService();
