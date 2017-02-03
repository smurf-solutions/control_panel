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
var ng2_toasty_1 = require('ng2-toasty');
var HomeComponent = (function () {
    function HomeComponent(app, collections, toasty) {
        this.app = app;
        this.collections = collections;
        this.toasty = toasty;
        this.servers = [
            { title: 'Local', link: 'http://localhost:3000/collections/' },
            { title: 'Demo', link: 'https://smurf-solutions.github.io/control_panel/collections/' }
        ];
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['home.component.css'],
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _a) || Object, (typeof (_b = typeof services_2.CollectionsService !== 'undefined' && services_2.CollectionsService) === 'function' && _b) || Object, ng2_toasty_1.ToastyService])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
exports.HomeComponent = HomeComponent;
