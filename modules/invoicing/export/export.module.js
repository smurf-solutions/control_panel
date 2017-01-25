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
var export_component_js_1 = require('./export.component.js');
var invoice_sheet_component_js_1 = require('./invoice-sheet/invoice-sheet.component.js');
var ExportModule = (function () {
    function ExportModule() {
    }
    ExportModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule,
                router_1.RouterModule.forChild([{ path: 'Print', component: export_component_js_1.ExportComponent }])
            ],
            declarations: [export_component_js_1.ExportComponent, invoice_sheet_component_js_1.InvoiceSheetComponent],
            exports: [export_component_js_1.ExportComponent, invoice_sheet_component_js_1.InvoiceSheetComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ExportModule);
    return ExportModule;
}());
exports.ExportModule = ExportModule;
