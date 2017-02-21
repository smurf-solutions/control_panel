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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
var http_1 = require('@angular/http');
var ng2_toasty_1 = require('ng2-toasty');
var modals_1 = require('@sys/modals');
var material_2 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var pipes_1 = require('@sys/pipes');
var not_found_1 = require('@sys/not-found');
var services_1 = require('@sys/services');
var app_component_1 = require('app/app.component');
var AppModule = (function () {
    function AppModule(mdIconRegistry) {
        mdIconRegistry.addSvgIconSetInNamespace('icons', 'svg/icons.svg');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_2.MaterialModule.forRoot(),
                flex_layout_1.FlexLayoutModule,
                http_1.HttpModule,
                ng2_toasty_1.ToastyModule.forRoot(),
                router_1.RouterModule.forRoot(AppConfig.Routing.concat([
                    { path: '**', component: not_found_1.NotFoundComponent }
                ]), { useHash: true }),
                not_found_1.NotFoundModule,
                services_1.SysServicesModule,
                modals_1.ModalsModule,
                pipes_1.PipeModules
            ],
            exports: [platform_browser_1.BrowserModule, ng2_toasty_1.ToastyModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [material_1.MdIconRegistry])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
