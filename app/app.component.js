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
var core_2 = require('@angular/core');
var material_1 = require('@angular/material');
var services_1 = require('@sys/services');
var services_2 = require('@sys/services');
var AppConfig = require('./app.config.js');
var company_config_js_1 = require('../company.config.js');
var AppComponent = (function () {
    function AppComponent(collections, app, snack) {
        this.collections = collections;
        this.app = app;
        this.snack = snack;
        this.title = 'Admin panel ';
        this.Config = AppConfig;
        this.leftbarMenuController = 'base';
        this.state = {};
        this.app.layout = this;
        this.app.company = company_config_js_1.CompanyConfig;
        if (this.Config.DEMO)
            this.snack.open("Режим Демонстрация", "х");
    }
    AppComponent.prototype.getDbName = function () {
        var parser = document.createElement('a');
        parser.href = this.collections.authService.dbUrl;
        return parser.hostname + '  ' + parser.pathname.replace('/collections/', '').replace('/', ' ');
        return this.collections.authService.dbUrl;
    };
    AppComponent.prototype.store = function () {
        this.state.leftbar = {
            opened: this.leftbar.opened
        };
    };
    AppComponent.prototype.restore = function () {
        if (this.state.leftbar.opened)
            this.leftbar.open();
        else
            this.leftbar.close();
    };
    AppComponent.prototype.toggleLeftbar = function () {
        if (this.leftbar.opened) {
            this.leftbar.close();
        }
        else {
            this.leftbar.open();
            if (!this.rightbarLocked)
                this.rightbar.close();
        }
    };
    AppComponent.prototype.openrightbar = function () {
        this.rightbar.open();
        this.leftbar.close();
    };
    AppComponent.prototype.togglerightbar = function () {
        if (this.rightbar.opened) {
            if (!this.rightbarLocked) {
                this.rightbar.close();
            }
        }
        else {
            this.openrightbar();
        }
    };
    __decorate([
        core_2.ViewChild('leftbar'), 
        __metadata('design:type', (typeof (_a = typeof core_2.MdSidenav !== 'undefined' && core_2.MdSidenav) === 'function' && _a) || Object)
    ], AppComponent.prototype, "leftbar");
    __decorate([
        core_2.ViewChild('rightbar'), 
        __metadata('design:type', (typeof (_b = typeof core_2.MdSidenav !== 'undefined' && core_2.MdSidenav) === 'function' && _b) || Object)
    ], AppComponent.prototype, "rightbar");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styleUrls: AppConfig.Styles,
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof services_2.CollectionsService !== 'undefined' && services_2.CollectionsService) === 'function' && _c) || Object, (typeof (_d = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _d) || Object, material_1.MdSnackBar])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
exports.AppComponent = AppComponent;
