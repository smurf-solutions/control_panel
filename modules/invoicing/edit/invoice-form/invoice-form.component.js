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
var ng2_toasty_1 = require('ng2-toasty');
var services_1 = require('@sys/services');
var InvoiceFormComponent = (function () {
    function InvoiceFormComponent(service, snackBar, toasty) {
        this.service = service;
        this.snackBar = snackBar;
        this.toasty = toasty;
    }
    InvoiceFormComponent.prototype.save = function () {
        var _this = this;
        var data = {
            number: this.number,
            date: this.date,
            date_pay: this.date_pay,
            customer: this.customer,
            mrp: this.mrp,
            uic: this.uic,
            email: this.email,
            phone: this.phone,
            city: this.city,
            country: this.country,
            address: this.address,
            payment: this.payment,
            note: this.note
        };
        this.toasty.error({ title: 'ДЕМО', msg: 'Записите са забранени !' });
        return;
        this.service.post('invoices', data).subscribe(function (res) {
            var res = JSON.parse(res._body);
            if (res.success) {
                _this.snackBar.open("Записът е успеше", null, { duration: 4000, color: 'warn' });
            }
            else {
                _this.snackBar.open("Нещо се е прецакало", "Презареди", { color: 'warn' });
            }
        });
    };
    InvoiceFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'invoice-form',
            templateUrl: 'invoice-form.component.html',
            inputs: ['number', 'date', 'date_pay', 'customer', 'mrp', 'uic', 'email', 'phone', 'city', 'country', 'address', 'payment', 'note']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.CollectionsService !== 'undefined' && services_1.CollectionsService) === 'function' && _a) || Object, material_1.MdSnackBar, ng2_toasty_1.ToastyService])
    ], InvoiceFormComponent);
    return InvoiceFormComponent;
    var _a;
}());
exports.InvoiceFormComponent = InvoiceFormComponent;
