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
var services_1 = require('@sys/services');
var services_2 = require('@sys/services');
var services_3 = require('@sys/services');
var services_4 = require('@sys/services');
var services_5 = require('@sys/services');
var AppComponent = (function () {
    function AppComponent(auth, app, lang, on, progress) {
        this.auth = auth;
        this.app = app;
        this.lang = lang;
        this.on = on;
        this.progress = progress;
        this.title = 'Admin panel';
        this.Config = AppConfig;
        this.state = {};
        this.app.layout = this;
        this.app.company = CompanyConfig;
    }
    AppComponent.prototype.getDbName = function () {
        var parser = document.createElement('a');
        parser.href = this.auth.dbUrl;
        return parser.hostname + '  ' + parser.pathname.replace('/collections/', '').replace('/', ' ');
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
        __metadata('design:paramtypes', [(typeof (_c = typeof services_2.AuthService !== 'undefined' && services_2.AuthService) === 'function' && _c) || Object, (typeof (_d = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _d) || Object, (typeof (_e = typeof services_3.LanguageService !== 'undefined' && services_3.LanguageService) === 'function' && _e) || Object, (typeof (_f = typeof services_4.EventsService !== 'undefined' && services_4.EventsService) === 'function' && _f) || Object, (typeof (_g = typeof services_5.ProgressService !== 'undefined' && services_5.ProgressService) === 'function' && _g) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
exports.AppComponent = AppComponent;
