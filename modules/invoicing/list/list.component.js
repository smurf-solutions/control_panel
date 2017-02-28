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
var material_1 = require('@angular/material');
var services_1 = require('@sys/services');
var services_2 = require('@sys/services');
var services_3 = require('@sys/services');
var services_4 = require('@sys/services');
var services_5 = require('@sys/services');
var InvoicingConfig = require('./../invoicing.config.js');
var edit_modal_component_js_1 = require('./../edit/edit-modal.component.js');
var modals_1 = require('@sys/modals');
var ListComponent = (function () {
    function ListComponent(app, collections, dialog, on, auth) {
        this.app = app;
        this.collections = collections;
        this.dialog = dialog;
        this.on = on;
        this.auth = auth;
        this.dialogConfig = { disableClose: false,
            width: '600px', height: '', position: { top: '', bottom: '', left: '', right: '' }
        };
        this.listInfo = InvoicingConfig.listConfig;
        this.exportList = {};
        this.filter = {
            date: {},
            number: {}
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.restore(this, 'invoicing.listInvoices');
        this.load();
        this.onLoginChanged = this.on.loginChanged.subscribe(function (res) { return _this.load(); });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.app.store(this, 'invoicing.listInvoices', ['http', 'invoices']);
        this.onLoginChanged.unsubscribe();
    };
    ListComponent.prototype.load = function () {
        var _this = this;
        this.selected = null;
        var filterAnd = new services_5.QueryService;
        filterAnd['$and'] = [{ 'data.date': this.filter.date }, { 'data.number': this.filter.number }];
        this.collections
            .get('invoices', filterAnd.toString())
            .subscribe(function (res) { return _this.invoices = res.data; }, function (err) { return _this.invoices = []; });
    };
    ListComponent.prototype.editInvoiceModal = function (invoice) {
        var dialogRef = this.dialog.open(edit_modal_component_js_1.EditModalComponent, this.dialogConfig);
        if (invoice) {
            dialogRef.componentInstance._id = invoice._id;
            dialogRef.componentInstance.invoice = invoice.data;
            dialogRef.componentInstance.customer = invoice.customer;
            dialogRef.componentInstance.payment = invoice.payment;
        }
        else {
            dialogRef.componentInstance._id = 0;
            dialogRef.componentInstance.invoice = {};
            dialogRef.componentInstance.customer = { company: {}, address: {}, contacts: {} };
            dialogRef.componentInstance.payment = {};
        }
        dialogRef.afterClosed().subscribe();
    };
    ListComponent.prototype.deleteInvoiceModal = function (invoice) {
        var _this = this;
        var dialogRef = this.dialog.open(modals_1.ConfirmModalComponent);
        dialogRef.componentInstance.message = ['Invoice', '#', ': <b>', invoice.data.number + '</b><br>',
            'Date', ': <b>' + invoice.data.date + '</b><br>',
            'Customer', ': <b>' + invoice.customer.company.name + '</b>'];
        dialogRef.componentInstance.icon = 'delete';
        dialogRef.componentInstance.color = 'warn';
        dialogRef.componentInstance.buttonOk = 'Delete';
        dialogRef.afterClosed().subscribe(function (res) {
            if (res == 'yes') {
                _this.collections.remove('invoices', { _id: invoice._id }).subscribe(function (res) { }, function (err) { });
            }
        });
    };
    ListComponent.prototype.getPagesNum = function () {
        return Math.ceil(this.listInfo.founded / this.listInfo.perPage);
    };
    ListComponent.prototype.select = function (invoice) {
        this.selected = invoice;
        this.app.layout.leftbar.close();
        if (this.invoicing_bar)
            this.invoicing_bar.open();
    };
    __decorate([
        core_1.ViewChild('invoicing_bar'), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "invoicing_bar");
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['list.component.css'],
            templateUrl: 'list.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _a) || Object, (typeof (_b = typeof services_2.CollectionsService !== 'undefined' && services_2.CollectionsService) === 'function' && _b) || Object, material_1.MdDialog, (typeof (_c = typeof services_3.EventsService !== 'undefined' && services_3.EventsService) === 'function' && _c) || Object, (typeof (_d = typeof services_4.AuthService !== 'undefined' && services_4.AuthService) === 'function' && _d) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b, _c, _d;
}());
exports.ListComponent = ListComponent;
