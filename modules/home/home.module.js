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
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var home_component_js_1 = require('./home.component.js');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [home_component_js_1.HomeComponent],
            imports: [
                router_1.RouterModule.forChild([{ path: '', component: home_component_js_1.HomeComponent }]),
                material_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
