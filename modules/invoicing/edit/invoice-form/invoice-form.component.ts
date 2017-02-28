import { Component, ViewChild } from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FromsModule }          from '@angular/forms';
import { ToastyService }        from 'ng2-toasty';

import { CollectionsService }   from '@sys/services';


@Component({
	moduleId: module.id,
	selector: 'invoice-form',
	templateUrl: 'invoice-form.component.html',
	inputs: [ '_id','data','customer','payment', 'products']
})
export class InvoiceFormComponent {
	data = {};
	payment = {};
	customer = {company:{},address:{},contacts:{}};
	products = [];
	
	constructor (
		private collections : CollectionsService,
		private toasty : ToastyService
	){}
	
	save() {
		let data = {
			_id      : this._id,
			data     : this.data,
			payment  : this.payment,
			customer : this.customer,
			products : this.products
		}
				
		this.collections.post( 'invoices', data ).subscribe( res => {
			//let res = JSON.parse( res._body );
			//console.log( this._invoice ) 
		});
	}
}
