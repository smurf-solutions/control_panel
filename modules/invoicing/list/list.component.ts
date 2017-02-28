import { Component, ViewChild }    from '@angular/core';
import { ViewContainerRef }        from '@angular/core';
import { MdDialog }                from '@angular/material';

import { SysService }              from '@sys/services'
import { CollectionsService }      from '@sys/services'
import { EventsService }           from '@sys/services'
import { AuthService }             from '@sys/services'
import { QueryService }            from '@sys/services'

import * as InvoicingConfig        from './../invoicing.config.js';

import { InvoiceViewComponent }    from './../view/invoice-view/invoice-view.component.js';
import { EditModalComponent }      from './../edit/edit-modal.component.js';
import { ConfirmModalComponent }   from '@sys/modals'


@Component({
	moduleId: module.id,
	styleUrls: [ 'list.component.css' ],
	templateUrl: 'list.component.html'
})
export class ListComponent {
	@ViewChild('invoicing_bar') invoicing_bar;
	onLoginChanged : Event;
	dialogConfig = { disableClose: false,
		width: '600px', height: '', position: { top: '', bottom: '', left: '', right: ''}
	}
	listInfo = InvoicingConfig.listConfig;
	exportList = {};
	filter = { 
		date   : {},  
		number : {}
	}
	
	constructor( 
		public app : SysService,
		public collections : CollectionsService,
		public dialog : MdDialog,
		public on : EventsService,
		public auth: AuthService,
	){}
	
	ngOnInit() {
		this.app.restore(this, 'invoicing.listInvoices');
		this.load();
		this.onLoginChanged = this.on.loginChanged.subscribe( res => this.load() )
	}
	ngOnDestroy() {
		this.app.store( this, 'invoicing.listInvoices', [ 'http', 'invoices' ] );
		this.onLoginChanged.unsubscribe();
	}

	
	load() {
		this.selected = null;
		
		let filterAnd = new QueryService
		filterAnd['$and'] = [ { 'data.date': this.filter.date }, { 'data.number' : this.filter.number } ]

		this.collections
			.get( 'invoices', filterAnd.toString() ) 
			.subscribe( res => this.invoices = res.data, err => this.invoices = [] )
	}
	
	editInvoiceModal( invoice ) {
		let dialogRef = this.dialog.open( EditModalComponent, this.dialogConfig )
		//var _invoice = JSON.parse( JSON.stringify(invoice) )
		if( invoice ) {
			dialogRef.componentInstance._id      = invoice._id
			dialogRef.componentInstance.invoice  = invoice.data
			dialogRef.componentInstance.customer = invoice.customer
			dialogRef.componentInstance.payment  = invoice.payment
		} else {
			dialogRef.componentInstance._id      = 0
			dialogRef.componentInstance.invoice  = {}
			dialogRef.componentInstance.customer = {company:{},address:{},contacts:{}}
			dialogRef.componentInstance.payment  = {}
		}
		dialogRef.afterClosed().subscribe( 
			//invoice1 = JSON.parse( JSON.stringify( invoice ) )
			//res => { this.load() }
		);
	}
	deleteInvoiceModal( invoice ) {
		let dialogRef = this.dialog.open( ConfirmModalComponent )
		dialogRef.componentInstance.message  = ['Invoice','#',': <b>',invoice.data.number + '</b><br>', 
												'Date', ': <b>' + invoice.data.date + '</b><br>', 
												'Customer', ': <b>' + invoice.customer.company.name + '</b>']
		dialogRef.componentInstance.icon     = 'delete'
		dialogRef.componentInstance.color    = 'warn'
		dialogRef.componentInstance.buttonOk = 'Delete'
		
		dialogRef.afterClosed().subscribe( res => { 
			if( res == 'yes') {
				this.collections.remove( 'invoices', {_id:invoice._id}  ).subscribe(
					res => { /*this.load()*/ },
					err => {}
				)
			}
		})
	}
	
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
	
	getPagesNum() {
		return Math.ceil( this.listInfo.founded / this.listInfo.perPage );
	}
	
	select( invoice ) {
		this.selected = invoice; 
		this.app.layout.leftbar.close(); 
		if( this.invoicing_bar ) this.invoicing_bar.open();
	}
}