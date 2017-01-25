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
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var flex_layout_1 = require('@angular/flex-layout');
var forms_1 = require('@angular/forms');
var pipes_1 = require('@app/pipes');
var material_2 = require('@app/material');
var list_component_js_1 = require('./list.component.js');
var invoices_table_component_js_1 = require('./table/invoices-table.component.js');
var view_module_js_1 = require('./../view/view.module.js');
var ListModule = (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule, forms_1.FormsModule,
                router_1.RouterModule.forChild([{ path: 'List', component: list_component_js_1.ListComponent }]),
                pipes_1.PipeModules, material_2.AppMaterialModules,
                view_module_js_1.ViewModule
            ],
            declarations: [
                list_component_js_1.ListComponent, invoices_table_component_js_1.InvoicesTableComponent,
            ],
            exports: [list_component_js_1.ListComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ListModule);
    return ListModule;
}());
exports.ListModule = ListModule;
