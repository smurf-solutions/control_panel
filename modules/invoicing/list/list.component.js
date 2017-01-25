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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var service_1 = require("@app/service");
var InvoicingConfig = require("./../invoicing.config.js");
var ListComponent = ListComponent_1 = (function () {
    function ListComponent(app, http, dialog) {
        this.app = app;
        this.http = http;
        this.dialog = dialog;
        this.collectionOperations = InvoicingConfig.collectionOperations;
        this.listInfo = InvoicingConfig.listConfig;
        this.exportList = {};
    }
    ListComponent.prototype.newInvoice = function () {
        var dialogRef = this.dialog.open(ListComponent_1);
        if (this.selected) {
            dialogRef.componentInstance.invoice = this.selected.data;
            dialogRef.componentInstance.customer = this.selected.customer;
            dialogRef.componentInstance.products = this.selected.products;
            dialogRef.componentInstance.payment = this.selected.payment;
        }
        //dialogRef.afterClosed().subscribe( res=> { alert(res} );
        /*
        this.dialogsService
          .confirm('Нова фактура', 'Да направя ли нова фактура?', this.viewContainerRef)
          .subscribe(res => this.result = res);
        */
    };
    ListComponent.prototype.ngOnInit = function () {
        this.load();
        this.app.restore(this, 'invoicing.listInvoices');
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.app.store(this, 'invoicing.listInvoices', ['http', 'invoices']);
    };
    ListComponent.prototype.load = function () {
        var _this = this;
        this.selected = null;
        this.http
            .get('collections/invoices/' + this.collectionOperations.getList)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.invoices = res.invoices; });
    };
    /*
    getPageItems() {
        let s = this.search;
        this.pageItems = this.invoices
        
        if(this.pageItems) {
            if( s ) this.pageItems = this.pageItems
                        .filter( i =>  i.data.number.toString().indexOf(s)  > -1
                                    || i.data.sum.toString().indexOf(s)     > -1
                                    || i.data.total.toString().indexOf(s)   > -1
                                    || i.customer.company.name.indexOf(s)   > -1
                                    || i.customer.address.locale.indexOf(s) > -1
                                );
            this.pageItems = this.pageItems.slice( this.listInfo.perPage*(this.listInfo.page-1), this.listInfo.perPage*this.listInfo.page );
            this.listInfo.all = this.invoices.length;
            this.listInfo.founded = this.pageItems.length;
        }
        return this.pageItems;
    }
    */
    ListComponent.prototype.getPagesNum = function () {
        return Math.ceil(this.listInfo.founded / this.listInfo.perPage);
    };
    ListComponent.prototype.select = function (invoice) {
        this.selected = invoice;
        this.app.layout.leftbar.close();
        if (this.invoicing_bar)
            this.invoicing_bar.open();
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild('invoicing_bar'),
    __metadata("design:type", Object)
], ListComponent.prototype, "invoicing_bar", void 0);
ListComponent = ListComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['list.component.css'],
        templateUrl: 'list.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof service_1.AppService !== "undefined" && service_1.AppService) === "function" && _a || Object, http_1.Http,
        material_1.MdDialog])
], ListComponent);
exports.ListComponent = ListComponent;
var ListComponent_1, _a;
