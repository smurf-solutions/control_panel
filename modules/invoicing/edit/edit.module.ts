import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { MaterialModule }          from '@angular/material';
import { RouterModule }            from '@angular/router';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';

import { PipeModules }             from '@sys/pipes';
import { AppMaterialModules }      from '@sys/material';


import { EditPageComponent }       from './edit-page.component.js';
import { EditModalComponent }       from './edit-modal.component.js';
import { InvoiceFormComponent }    from './invoice-form/invoice-form.component.js';


@NgModule({
	imports: [
		CommonModule, MaterialModule, FlexLayoutModule, FormsModule,
		RouterModule.forChild([{path:'Edit',component:EditPageComponent}]),
		PipeModules, AppMaterialModules
	],
	declarations: [ EditPageComponent, EditModalComponent, InvoiceFormComponent ],
	exports: [ EditPageComponent, EditModalComponent ],
	entryComponents: [ EditModalComponent ]
})
export class EditModule {}
