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
var http_1 = require('@angular/http');
var service_1 = require('@app/service');
var invoicing_config_js_1 = require('./invoicing.config.js');
var InvoicingService = (function () {
    function InvoicingService(http, service) {
        this.http = http;
        this.service = service;
        this.Config = invoicing_config_js_1.collectionOperations;
        if (!this.service.invoicing) {
            this.service.invoicing = {};
        }
    }
    InvoicingService.prototype.ngOnDestroy = function () {
        alert("destroy");
    };
    InvoicingService.prototype.set = function () {
        console.log("set");
    };
    InvoicingService.prototype.get = function () {
        console.log('get');
    };
    InvoicingService.prototype.setFilter = function (f) {
        this.service.invoicing.filter = f.toLowerCase();
    };
    InvoicingService.prototype.getFilter = function () {
        if (!this.service.invoicing.filter)
            return '';
        return this.service.invoicing.filter;
    };
    InvoicingService.prototype.getInvoices = function () {
        var filter = this.getFilter();
        var reg = new RegExp(filter, 'i');
        return this.service.invoicing.invoices;
    };
    InvoicingService.prototype.selectInvoice = function (invoice) {
        this.service.invoicing.selected = invoice;
    };
    InvoicingService.prototype.getSelectedInvoice = function () {
        return this.service.invoicing.selected || { data: {}, customer: {}, payment: {}, products: {} };
    };
    InvoicingService.prototype.isSelectedInvoice = function (invoice) {
        var ret = false;
        var s = this.getSelectedInvoice();
        if (invoice
            && this.service.invoicing.selected
            && this.service.invoicing.selected.data
            && this.service.invoicing.selected.data.number) {
            ret = invoice.data.number === this.service.invoicing.selected.data.number;
        }
        return ret;
    };
    InvoicingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof service_1.AppService !== 'undefined' && service_1.AppService) === 'function' && _a) || Object])
    ], InvoicingService);
    return InvoicingService;
    var _a;
}());
exports.InvoicingService = InvoicingService;
