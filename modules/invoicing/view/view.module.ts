import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { MaterialModule }          from '@angular/material';
import { RouterModule }            from '@angular/router';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';

import { PipeModules }             from '@sys/pipes';
import { AppMaterialModules }      from '@sys/material';

//import { ViewComponent }           from './view.component.js';
import { InvoiceViewComponent }    from './invoice-view/invoice-view.component.js';


@NgModule({
	imports: [
		CommonModule, MaterialModule, FlexLayoutModule, FormsModule,
		//RouterModule.forChild([{path:'View',component:ViewComponent}]),
		PipeModules, AppMaterialModules
	],
	declarations: [ InvoiceViewComponent ],
	exports: [ InvoiceViewComponent ],
	entryComponents: [ InvoiceViewComponent ]
})
export class ViewModule {}
