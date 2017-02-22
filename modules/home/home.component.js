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
var services_1 = require('@sys/services');
var services_2 = require('@sys/services');
var services_3 = require('@sys/services');
var ng2_toasty_1 = require('ng2-toasty');
var HomeComponent = (function () {
    function HomeComponent(app, collections, auth, toasty) {
        this.app = app;
        this.collections = collections;
        this.auth = auth;
        this.toasty = toasty;
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['home.component.css'],
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _a) || Object, (typeof (_b = typeof services_3.CollectionsService !== 'undefined' && services_3.CollectionsService) === 'function' && _b) || Object, (typeof (_c = typeof services_2.AuthService !== 'undefined' && services_2.AuthService) === 'function' && _c) || Object, ng2_toasty_1.ToastyService])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
exports.HomeComponent = HomeComponent;
