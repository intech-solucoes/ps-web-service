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
var UsuarioService = /** @class */ (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService() {
        var _this = _super.call(this, "usuario") || this;
        _this.VerificarLogin = function () { return _this.CriarRequisicao(service_1.TipoRequisicao.GET); };
        _this.Login = function (cpf, senha) { return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "login", { Cpf: cpf, Senha: senha }); };
        _this.PrimeiroAcesso = function (cpf, dataNascimento) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });
        };
        _this.TrocarSenha = function (senhaAntiga, senhaNova) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });
        };
        return _this;
    }
    return UsuarioService;
}(service_1.BaseService));
exports.default = new UsuarioService();
