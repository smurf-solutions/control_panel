import { Component, Output, EventEmitter }   from '@angular/core';

@Component({
	selector: 'invoices-table',
	moduleId: module.id,
	templateUrl: 'invoices-table.component.html',
	inputs: [ 'invoices', 'selected' ]
})
export class InvoicesTableComponent {
	@Output() selectedChange = new EventEmitter();

	getSum( key ) {
		if(!this.invoices) return;
		return this.invoices.reduce( (a,b)=>{return a+parseFloat(b.data[key])}, 0);
	}
}