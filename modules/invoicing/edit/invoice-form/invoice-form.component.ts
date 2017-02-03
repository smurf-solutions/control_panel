import { Component, ViewChild } from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FromsModule }          from '@angular/forms';
import { MdSnackBar }           from '@angular/material';
import { ToastyService }        from 'ng2-toasty';

import { CollectionsService }   from '@sys/services';


@Component({
	moduleId: module.id,
	selector: 'invoice-form',
	templateUrl: 'invoice-form.component.html',
	inputs: [ 'number','date','date_pay','customer','mrp','uic','email','phone','city','country','address', 'payment','note' ]
})
export class InvoiceFormComponent {
	constructor (
		private service: CollectionsService,
		public snackBar: MdSnackBar,
		private toasty:ToastyService
	){}
	
	save() {
		let data = {
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
		this.toasty.warning({title:'ДЕМО', msg:'Записите са забранени !'});
		return;
		
		this.service.post( 'invoices', data ).subscribe( res => {
			let res = JSON.parse( res._body );
			 
			if( res.success ) {
				this.toasty.success("Записът е успеше");
			} else {
				this.toasty.error("Нещо се е прецакало")
			}
		});
	}
}
