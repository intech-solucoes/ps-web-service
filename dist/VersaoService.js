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
var VersaoService = /** @class */ (function (_super) {
    __extends(VersaoService, _super);
    function VersaoService() {
        return _super.call(this, "/") || this;
    }
    VersaoService.prototype.Verificar = function () {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET);
    };
    return VersaoService;
}(service_1.BaseService));
exports.default = new VersaoService();
