"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var company_config_js_1 = require('../company.config.js');
var AppService = (function () {
    function AppService() {
        this.company = company_config_js_1.CompanyConfig;
        this.storage = {};
    }
    /**
    Store and Restore object
    */
    AppService.prototype.store = function (obj, key, exclude) {
        var _this = this;
        this.storage[key] = this.storage[key] || {};
        if (!exclude) {
            this.storage[key] = obj;
        }
        else {
            exclude = exclude || [];
            var methods = Object.keys(obj);
            methods.forEach(function (method) {
                if (!(obj[method] instanceof AppService))
                    if (exclude.indexOf(method) == -1)
                        _this.storage[key][method] = obj[method];
            });
        }
    };
    AppService.prototype.restore = function (obj, key) {
        var _this = this;
        if (this.storage[key]) {
            var methods = Object.keys(this.storage[key]);
            methods.forEach(function (method) { return obj[method] = _this.storage[key][method]; });
        }
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
